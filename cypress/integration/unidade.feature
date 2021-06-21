Feature: Unidade

    Como usuario, desejo pesquisar por unidade
    Para que possa validar o nome das unidades na tela

        Scenario: Validar Nome da Unidade
            Given que acesso a home page
              And que eu acesso as unidades
              And seleciono as opções de facilidades
             When Quando aciono a opção ver detalhes
             Then Então o sistema apresenta informações da unidade

