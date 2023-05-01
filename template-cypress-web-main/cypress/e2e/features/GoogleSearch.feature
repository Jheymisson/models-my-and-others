# language: pt
@google_search
Funcionalidade: Cenário de pesquisa de termos no Google

    @main_flow
    Cenario: Consulta especifica do termo platformbuilders
        Dado Eu tenha acessado a pagina de pesquisa do Google
        E O titulo da pagina de pesquisa do Google for exibido
        Quando Eu pesquisar pelo termo "platformbuilders"
        Entao Eu devo visualizar o rotulo "platformbuilders.io" e o link "https://www.platformbuilders.io/" como um dos itens de resultado

    @alternative_flow
    Esquema do Cenario: Consulta de outros termos relacioandos a Builders
        Dado Eu tenha acessado a pagina de pesquisa do Google
        E O titulo da pagina de pesquisa do Google for exibido
        Quando Eu pesquisar pelo termo "<termo>"
        Entao Eu devo visualizar o rotulo "<rotulo>" e o link "<link>" como um dos itens de resultado
        Exemplos:
            |        termo      |   rotulo                                                      |    link                         |
            |   builders bank   | Builders Bank - A camada financeira pronta para alavancar     | https://www.buildersbank.tech/  |
            |   buildflex       | Buildflex                                                     | https://buildflex.io/           |

    @exception_flow
    @ignore
    Cenario: Outro cenario de excecao com @ignore aplicado
        Dado que o @ignore foi aplicado
        Quando os teste for executado
        Entao este cenario sample nao sera processado
