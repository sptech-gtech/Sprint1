//Js do Alexandre

function Chamar() {
    //document é a página em si, é uma partição, igual o console ou sources é
    //getElementById, é bem auto-explicativo, mas ele pega um elemento pelo seu id, no caso com checkbox não iria funcionar por exemplo: checkbox_alexandre.value
    var verifica_alexandre = document.getElementById("checkbox_alexandre");
    var verifica_enzo = document.getElementById("checkbox_enzo");
    var verifica_gisele = document.getElementById("checkbox_gisele");
    var verifica_kaori = document.getElementById("checkbox_kaori");
    var verifica_nathan = document.getElementById("checkbox_nathan");
    var verifica_yan = document.getElementById("checkbox_yan");
    var verifica_yasmin = document.getElementById("checkbox_yasmin");
    //(verifica_alexandre.checked == true) ele verifica se a check box foi marcada
    if (verifica_alexandre.checked == true) {
        document.getElementById('mostra_calculadora').innerHTML = `
            <h1 class="alexandre_text_center">Simulador financeiro</h1>
            <div class="alexandre_text_center alexandre_card alexandre_borda-card">
                <p>
                    Insira os valores por safra
                </p>
                <p>
                    <input type="text" placeholder="Espécie de uva" id="alexandre_nome_uva" class="alexandre_input">
                    <input type="number" placeholder="Valor do kilo da uva" id="alexandre_valor_kg_uva" class="alexandre_input">
                    <input type="number" placeholder="Kilos de uva por m² plantados" id="alexandre_kg_metro_uva" class="alexandre_input">
                    <input type="number" placeholder="Quantidade de m² plantados" id="alexandre_metro_uva" class="alexandre_input">
                </p>
                <p>
                    <button onclick="alexandre_Simular()" class="alexandre_button">
                        Simular
                    </button>
                </p>
                <p>
                    Resultados:
                </p>
                <p>
                    <a id="alexandre_mensagem_simular"></a>
                </p>
            </div>
            <div class="alexandre_text_center alexandre_card alexandre_borda-card">
                <p>
                    Caso plante em hectar e não saiba transformar para metro quadrado(m²)
                </p>
                <p>
                    <input type="number" placeholder="Hectar para m²" id="alexandre_hectar_metro" class="alexandre_input">
                </p>
                <p>
                    <button onclick="alexandre_Calcular()" class="alexandre_button">
                        Calcular
                    </button>
                </p>
                <p>
                    Resultados:
                </p>
                <p>
                    <a id="alexandre_mensagem_hectar_metro"></a>
                </p>
            </div>`
            background_principal.style.backgroundColor = 'moccasin'
    }
    if (verifica_enzo.checked == true) {
        document.getElementById('mostra_calculadora').innerHTML = `
        <div class = "alexandre_card alexandre_borda-card">
        insira o preço da tonelada <input id="enzo_precoTonelada"><br>
        insira o total de suas perdas <input id="enzo_perdaTotal"><br>
        insira o peso total <input id="enzo_pesoTotal"><br>
        <button onclick="enzo_calc()">calcular</button>
        <div id="enzo_div1"></div>
        </div>`
        background_principal.style.backgroundColor = 'moccasin'
    }
    if (verifica_gisele.checked == true) {
        document.getElementById('mostra_calculadora').innerHTML = `
        <div class="gisele_questionario">
            Qual é a espécie de uva que você colhe?
            <input id="gisele_input_especie"><br>
            Quantas toneladas de uva você colheta por safra?:
            <input id="gisele_input_producao"><br>
            Digite o custo da sua safra:
            <input id="gisele_input_valor"><br>
            <button onclick="gisele_calculo()">Analisar lucro</button>
            <div id="gisele_div_lucro"></div>
        </div>`
        background_principal.style.backgroundColor = "#d6fed6"
    }
    if (verifica_nathan.checked == true) {
        document.getElementById('mostra_calculadora').innerHTML = `
            <center>
                <h1 style="font-family: cursive;">Previa Financeira</h1>
                <div class="nathandiv">
                    <br><br>
                    <h4>Qual o tipo de uva que você produz?
                        <input class="nathaninput nathaninputmedio" id="nathan_tipo_uva" placeholder="Ex.:Uva Niágara"><br><br>

                        Insira o preço que você vende o kg:
                        <input class="nathaninput nathaninputpequeno" id="nathan_preço_kilo_uva" placeholder="10" type="number"><br><br>

                        Quantos hectares para uva você possui?
                        <input class="nathaninput nathaninputmedio" id="nathan_hectar_uva" placeholder="1 hectar = 10000m²" type="number"><br>

                        <span style="font-size:xx-small; font-family: cursive;">
                            Por favor utilize ponto ao invez de virgula em
                            nossa calculadora, ela pode acabar não entendendo o numero.
                        </span><br><br>

                        <button class="nathanbutton" onclick="nathan_calc()">Calcular</button><br><br>
                    </h4>
                    <p id="nathan_modificavel"></p>
                </div>
            </center>`
        background_principal.style.backgroundColor = "rgb(215, 243, 197)"
    }
    if (verifica_kaori.checked == true) {
        document.getElementById('mostra_calculadora').innerHTML = `
            <center> 
                <div class="center KAORI_MAIN_CARD2 kaori_border_card centerpage kaori_div">
                    <h3>
                        SIMULADOR FINANCEIRO
                    </h3>
                    <div class="KAORI_MAIN_CARD kaori_border_card centerpage kaori_div">
                        <h2 class="kaori_h2">
                            VARIADADE DE UVA
                        </h2>
                        <input class="kaori_input" placeholder="Insera variadade..." id="kaori_variadade_de_uva"><br><br>
                    </div>
                    <div class="KAORI_MAIN_CARD kaori_border_card centerpage kaori_div">
                        <h2 class="kaori_h2">PREÇO DA VENDA</h2>
                        <input class="kaori_input" type="number" placeholder="Insera valor..." id="kaori_valorDaUva"><br><br>
                    </div>
                    <div class="KAORI_MAIN_CARD kaori_border_card centerpage kaori_div">
                        <h2 class="kaori_h2">
                            QUANTOS KG
                        </h2>
                        <input class="kaori_input" type="number" placeholder="Insera kilo..." id="kaori_kg_por_uva"><br><br>
                    </div>
                    <div class="KAORI_MAIN_CARD kaori_border_card centerpage kaori_div">
                        <h2 class="kaori_h2">
                            PERDA POR SAFRA
                        </h2> 
                        <input class="kaori_input" type="number" placeholder="Insera valor de perda..." id="kaori_perda_da_safra"><br><br> 
                    </div>
                    <button onclick="kaori_calcular_final()" class="kaori_button">
                        CALCULAR
                    </button>
                    <br>
                    <br>
                </div>
                <div id="kaori_uva_valor" class="right_border kaori_div"></div>
            </center>`
        background_principal.style.backgroundColor = "rgb(226, 226, 226)"
    }
    if (verifica_yan.checked == true) {
        document.getElementById('mostra_calculadora').innerHTML =`
        <center>
            <div id="fundoYan">
                <div id="inputsYan"> 
                    <h1 id="ajudaYan">
                        Faça uma estimativa de seus resultados!:
                    </h1>
                    <br>
                    <h1>
                        Informe a espécie de uva cultivada: <input type="text" id="tipoUvaYan" class="inputYan"><br>
                    </h1>
                    <h1>
                        Informe o valor do kg: <input type="number" id="pesoKgYan" class="inputYan"><br>
                    </h1>
                    <h1>
                        Informe o peso por m² por plantação (em kg): <input type="number" id="metroPlantacaoYan" class="inputYan"><br>
                    </h1>
                    <h1>
                        Informe a área plantada por m²: <input type="number" id="areaPlantadaYan" class="inputYan"><br>
                    </h1>
                    <button id="botaoYan" onclick="calcularPerda()">
                        Calcular Perda
                    </button>
                    <br><br>
                    <div id="exibirPerdaYan"></div> 
                    <br><br>
                </div>
            </div>
        </center>`
        background_principal.style.backgroundImage = "url('https://img.freepik.com/free-vector/seamless-pattern-grapes_179234-305.jpg?w=740&t=st=1678585386~exp=1678585986~hmac=636b9368f31c65dc715550415b037976ebf17363fbeb8094d61a124ebe2e2756')";
    }
    if (verifica_yasmin.checked == true) {
        document.getElementById('mostra_calculadora').innerHTML = `
        <div class = "alexandre_card alexandre_borda-card">
            Digite o tipo de uva que você cultiva:
            <input type="text" id="input_uva_yasmin" /> <br /><br />
        
            Digite a quantidade em kg de uvas que você produz por mês:
            <input type="number" id="input_qtd_uvas_prod_yasmin" /> <br /><br />
        
            Digite a quantidade em kg de uvas que você perde por mês:
            <input type="number" id="input_qtd_uvas_perda_yasmin" /> <br /><br />
        
            Digite o valor da uva que você vende por kg:
            <input type="number" id="input_valor_uva_yasmin" /> <br /><br />
        
            Digite o tamanho do terreno de plantio de uvas em m²:
            <input type="number" id="input_valor_terreno_yasmin" /> <br /><br />
        
            <button onclick="yasmin_calcUvas()">Calcular novo lucro</button> <br /><br />
        
            <div id="calculo"></div>
        </div>`
        background_principal.style.backgroundColor = 'moccasin'
    }
}

//Js do Alexandre

function alexandre_Simular(){
    var alexandre_pega_nome_uva = alexandre_nome_uva.value//pega o nome da uva
    var alexandre_pega_valor_uva = alexandre_valor_kg_uva.value//pega o valor por kilo da uva
    var alexandre_pega_kg_metro_uva = alexandre_kg_metro_uva.value//pega a quantidade de kilos por metro quadrado
    var alexandre_pega_metro_uva = alexandre_metro_uva.value//pega a quantidade de metros quadrados
    var alexandre_calcula_kg_metro = alexandre_pega_metro_uva * alexandre_pega_kg_metro_uva//calcula a quantidade de kilos de uva por metro quadrado
    var alexandre_calcula_valor_uva = alexandre_calcula_kg_metro * alexandre_pega_valor_uva//calcula o valor total de uvas
    var alexandre_calcula_ganho_atual = alexandre_calcula_valor_uva * 0.625//aplica a porcentagem de perda de uvas   
    var alexandre_calcula_ganho_futuro = alexandre_calcula_valor_uva * 0.98125//95% da perda reduizida (95% de 37.5% = 0.35625) (0.37.5 - 0.35625 = 0.01875) (1 - 0.0125 = 0.98125)
    var alexandre_calcula_ganho_diferença = alexandre_calcula_ganho_futuro - alexandre_calcula_ganho_atual//calcula a diferença do ganho atual, para o ganho futuro
    var alexandre_calcula_orçamento_dht11 = (alexandre_pega_metro_uva / 78.5) * 14//calcula a quantidade de dht11 necessários (78.5 = área de um círculo com raio de 5m) vezes 14 reais, que é o valor atual do dht11
    var alexandre_calcula_orçamento_placa_mae = ((alexandre_pega_metro_uva / 78.5) * 0.166666666667) * 50//a cada 6 dht11 (0.166666666667 * 6 = 1) ele retorna uma placa mãe e depois vezes 50  reais, que é o valor atual da placa mãe
    var alexandre_calcula_orçamento_total = alexandre_calcula_orçamento_dht11 + alexandre_calcula_orçamento_placa_mae + 50//calcula o orçamento final (total dht11 + total placa mãe + 1 lm35 que custa 50 reais, que é o valor atual)
    document.getElementById('alexandre_mensagem_simular').innerHTML = `Plantando ${alexandre_pega_nome_uva}, atualmente você deve ganhar aproximadamente R$${alexandre_calcula_ganho_atual}, se implementar nosso sistema você pode ganhar até R$${alexandre_calcula_ganho_diferença} a mais por safra!<br> O custo dos equipamentos (não incliuí a taxa de serviço) que te passamos é de R$${alexandre_calcula_orçamento_total}`
}
function alexandre_Calcular() {
    var alexandre_pega_hectar_metro = Number(alexandre_hectar_metro.value)//pega a quantidade de hectares
    var alexandre_calcula_hectar_metro = alexandre_pega_hectar_metro * 10000//transforma hectares para metro
    document.getElementById('alexandre_mensagem_hectar_metro').innerHTML = `Com ${alexandre_pega_hectar_metro} hectares, você tem ${alexandre_calcula_hectar_metro}m²`
}

//Js do Enzo

function enzo_calc(){ 
    var enzo_preco = Number(enzo_precoTonelada.value);
    var enzo_perda = Number(enzo_perdaTotal.value);
    var enzo_peso = Number(enzo_pesoTotal.value);
    var enzo_nossaPerda = enzo_perda * 0.65;
    var enzo_economia = enzo_nossaPerda * 0.95;
    var enzo_economiaDin = enzo_economia * enzo_preco
    var enzo_ganhoVelho = enzo_peso * enzo_preco;
    var enzo_ganhoNovo = enzo_ganhoVelho + enzo_economiaDin;
        
    div1.innerHTML = `no atual momento você está perdendo R$${enzo_economiaDin} de perdas evitaveis, ${enzo_economia} toneladas, com nosso produto você pode passar a ganhar 
    ${enzo_ganhoNovo}`;
}

//Js da Gisele

function gisele_calculo(){
    var gisele_especie = gisele_input_especie.value
    var gisele_producao = Number(gisele_input_producao.value);
    // valor da produção informado pelo usuario
    var gisele_valorSafra = Number(gisele_input_valor.value);
    // valor da safra
    var gisele_valorAnual = (gisele_producao * gisele_valorSafra ) * 2.5;
    // É possivel ter 2 safras e meio durante um ano por isso 2.5
    var gisele_perca = gisele_valorAnual * 0.50;
    var gisele_totalPerda = gisele_valorAnual - gisele_perca;
    // Levando em consideração que no minimo se perdem 25% da produção, no periodo de um ano 50% deve ser perdido

    div_lucro.innerHTML = `Levando em consideração a especie ${gisele_especie}, anualmente você terá R$${gisele_totalPerda} sem a devida monitoração do ambiente e poderá ganhar R$${gisele_valorAnual} usando nossa solução.`
}

//Js da Kaori

function kaori_calcular_final() {
    var kaori_nome = kaori_variadade_de_uva.value;
    var kaori_valor_uva = Number(kaori_valorDaUva.value);
    var kaori_kg = Number(kaori_kg_por_uva.value);
    var kaori_perda = Number(kaori_perda_da_safra.value)/100;
    var kaori_calcula_valor_uva = kaori_valor_uva * kaori_kg;
    var kaori_total_valor = (kaori_calcula_valor_uva * kaori_perda )/100
    var kaori_total_valor_projeto = (kaori_total_valor * 90) / 100

    kaori_uva_valor.innerHTML = `Plantando ${kaori_nome}, atualmente você deve ganhar aproximadamente R$${kaori_total_valor}, se implementar nosso sistema você pode ganhar até R$${kaori_total_valor_projeto} a mais por safra!<br>`
}

//Js do Nathan

function nathan_calc() {
    var nathan_uva = nathan_tipo_uva.value;
    var nathan_preço = Number(nathan_preço_kilo_uva.value);
    var nathan_hectar = Number(nathan_hectar_uva.value);

    //calculo de equipamento

    var nathan_ganho_100 = nathan_hectar*(nathan_preço*15000);
    var nathan_ganho_100max = nathan_hectar*150000;

    var nathan_perdamax = nathan_ganho_100*0.50;
    var nathan_perdamin = nathan_ganho_100*0.25;

    var nathan_ajuda_nossa = nathan_perdamax*0.80;

    var nathan_pode_ganhar = nathan_ganho_100max - nathan_perdamax + nathan_ajuda_nossa;
    var nathan_ganha = nathan_ganho_100 - nathan_perdamax;

    var nathan_sensor = 42900 * nathan_hectar

    nathan_modificavel.innerHTML = `

    <h3>Vamos fechar negocio?</h3>

    É muito bom bom saber que você está nos procurando, nos podemos fazer nosso melhor para sua plantação de <b>${nathan_uva}</b>.<br><br>

    Hoje em dia a sua perda é de em media de <b>R$${nathan_perdamin}</b> até <b>R$${nathan_perdamax}</b> por safra!<br><br>

    Com nossa ajuda podemos reduzir sua perda de uva em até 90%, assim acarretando em um ganho extra de até mais ou menos <b>R$${nathan_ajuda_nossa}</b>.<br>
    O custo de instalação para essa dimenção ficaria na faixa de <b>R$${nathan_sensor}</b><br><br>
    <h4>Entre em contato conosco já pela aba Contate-nos ☎ </h4>  

    `
}

//Js do Yan

function calcularPerdaYan(){

    // para facilitar a leitura:
    var especieYan = tipoUvaYan.value
    var pesoYan = pesoKgYan.value

    // para calcular os lucros:
    var lucroMetroYan = (pesoYan * metroPlantacaoYan.value) * areaPlantadaYan.value;
    var perdaYan =  (lucroMetroYan * (23/100));
    var recuperacaoYan = perdaYan - (perdaYan * 0.95);

    exibirPerdaYan.innerHTML = `Ficamos muito horados que você esteja escolhendo nossos serviços! Com a nossa ajuda em suas plantações ${tipoUvaYan.value} conseguiremos te auxiliar em diminuir
    suas perdas de <b>R$${perdaYan}</b> para até <b>R$${recuperacaoYan}</b>.`
}

//Js da Yasmin

function yasmin_calcUvas() {
    var uvaYasmin = input_uva_yasmin.value //identifica o tipo da uva

    var quantidadeUvaYasmin =
      Number(input_valor_terreno_yasmin.value) *
      (Number(input_qtd_uvas_prod_yasmin.value) -
        Number(input_qtd_uvas_perda_yasmin.value))
    // faz o calculo da quantidade de uvas que o cliente produz

    var lucroAtualYasmin =
      Number(input_valor_uva_yasmin.value) * quantidadeUvaYasmin
    // calcula o preço que o cliente vende as uvas pela quantidade

    var novoLucroYasmin =
      Number(input_valor_terreno_yasmin.value) *
      (Number(input_qtd_uvas_prod_yasmin.value) +
        Number(input_qtd_uvas_perda_yasmin.value * 0.9))
    // no novo lucro adicionamos 90% da quantidade de uvas que o cliente perde
    // á sua produção total

    var lucroTotalYasmin =
      Number(input_valor_uva_yasmin.value) * novoLucroYasmin
    // calculamos o lucro que o cliente irá ganhar com 90% da quantidade de uvas
    // que ele perde

    calculo.innerHTML = `
    A sua produção de uvas ${uvaYasmin} tem um lucro de R$${lucroAtualYasmin}. <br>
    Com nosso sistema você irá lucrar R$${lucroTotalYasmin}, resultando em um lucro de R$${
      lucroTotalYasmin * 12
    } anual.
    `
  }