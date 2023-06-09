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

      //Removendo numero do tipo da ação
    
      const lista_numeros_finais_removidos = bala_classificado.map((acao)=> {
        acao.Papel = acao.Papel.slice(0, -1)
        return acao
      })


      var array_visualizacao = [];
      for (var i = 0; i < 40; i++) {
        array_visualizacao.push({
          ACAO: lista_numeros_finais_removidos[i].Papel,
          COTACAO: lista_numeros_finais_removidos[i]["Cotação"],
          RANKING: lista_numeros_finais_removidos[i].RANKING_BALA,
        });
      }


      var repetidos = []
      const lista_repetidos_removidos = [];
      array_visualizacao.map((acao)=> {
        console.log(repetidos.includes(acao.ACAO))
        if(!repetidos.includes(acao.ACAO)){
          console.log("Entrou no if")
          repetidos.push(acao.ACAO);
          lista_repetidos_removidos.push(acao)
        }
      }) 
      console.log(lista_repetidos_removidos)
      
      return lista_repetidos_removidos;
    })
    .catch((erro) => {
      return erro;
    });

  return result_data_base;
}

module.exports = {
  getActions,
};
