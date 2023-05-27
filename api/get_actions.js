const carteira_module = require("./carteira");
const data_base = require("./get_data_base");

async function getActions() {
  const result_data_base = data_base()
    .then((db) => {
      //Parametros para o ranking:
      var liquidez_minima_2_meses = 200000;

      //Filtro de liquidez diaria
      const db_liquidez_filtrado = db.filter((acao) => {
        var mr_liq = acao["Liq.2meses"].replace(/[^\d]+/g, "");
        mr_liq = mr_liq.slice(0, mr_liq.length - 2);
        if (parseInt(mr_liq) > liquidez_minima_2_meses) return acao;
      });

      //filtro de EV/EBIT negativo ou zerado
      const db_ev_ebit_filtrado = db_liquidez_filtrado.filter((acao) => {
        var ev_ebit = acao["EV/EBIT"].replace(",", "");
        if (ev_ebit > 0) return acao;
      });

      //Classificando ROE do maior para menor
      function OrdenarROE(a, b) {
        var a_filtred = a.ROE.replace(",", ".");
        var b_filtred = b.ROE.replace(",", ".");
        a_filtred = a_filtred.replace("%", "");
        b_filtred = b_filtred.replace("%", "");
        return parseFloat(a_filtred) < parseFloat(b_filtred) ? true : -1;
      }
      var roe_classificado = db_ev_ebit_filtrado.sort(OrdenarROE);

      //Motando ranking do ROE
      roe_classificado.map((acao, index) => {
        acao["RANKING_ROE"] = index;
      });

      //Gerando EARNING YIELD
      roe_classificado.map((acao) => {
        acao["EARNING_YIELD"] = (1 / acao["EV/EBIT"].replace(",", ".")) * 100;
      });

      //Ordenando EARNING YIELD
      function OrdenarEY(a, b) {
        return a.EARNING_YIELD < b.EARNING_YIELD ? true : -1;
      }
      const earning_yield_classificado = roe_classificado.sort(OrdenarEY);

      //Montando ranking do EY
      earning_yield_classificado.map((acao, index) => {
        acao["RANKING_EY"] = index;
      });

      //Gerando BALA
      earning_yield_classificado.map((acao) => {
        acao["RANKING_BALA"] = acao.RANKING_EY + acao.RANKING_ROE;
      });

      //Ordenando BALA
      function OrdenarBALA(a, b) {
        return a.RANKING_BALA < b.RANKING_BALA ? -1 : true;
      }
      const bala_classificado = earning_yield_classificado.sort(OrdenarBALA);

      var array_visualização = [];
      for (var i = 0; i < 31; i++) {
        array_visualização.push({
          ACAO: bala_classificado[i].Papel,
          COTACAO: bala_classificado[i]["Cotação"],
          RANKING: bala_classificado[i].RANKING_BALA,
        });
      }

      return array_visualização;
    })
    .catch((erro) => {
      return erro;
    });

  return result_data_base;
}

module.exports = {
  getActions,
};
