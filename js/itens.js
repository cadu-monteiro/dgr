
const json = [
    {
        "nome": "REX",
        "info": "Explosivos sem risco considerável 1(-1.4S)",
        "listaNegra": ["RXS", "RFG", "RNG", "RCL", "RPG", "RFL", "RFS", "RSC", "RFW", "ROX", "ROP", "RCM", "RMD", "ICE", "FIL", "HUM", "EAT", "HEG", "AVI", "LHO", "ELI"],
        "detalhes": ""
    },
    {
        "nome": "RXS",
        "info": "Explosivos sem risco considerável (1.4S)",
        "listaNegra": ["REX", "RMD","ELI"],
        "detalhes": ""
    },
    {
        "nome": "RFG",
        "info": "Gás inflamável (2.1)",
        "listaNegra": ["REX", "RMD", "ELI"],
        "detalhes": ""
    },
    {
        "nome": "RNG",
        "info": "Gás não inflamável e não tóxico e pode ser também criogênico (2.2)",
        "listaNegra": ["REX"],
        "detalhes": ""
    },
    {
        "nome": "RCL",
        "info": "Líquido criogênico (2.2*)",
        "listaNegra": ["REX", "HEG", "AVI"],
        "detalhes": ""
    },
    {
        "nome": "RPG",
        "info": "Gás Tóxico (2.3)",
        "listaNegra": ["REX", "PER"],
        "detalhes": ""
    },
    {
        "nome": "RFL",
        "info": "Líquido Inflamável (3)",
        "listaNegra": ["REX", "ROX", "RMD", "ELI"],
        "detalhes": ""
    },
    {
        "nome": "RFS",
        "info": "Sólido Inflamável (4.1)",
        "listaNegra": ["REX", "ROX", "RMD", "ELI"],
        "detalhes": ""
    },
    {
        "nome": "RSC",
        "info": "Combustão espontânea (4.2)",
        "listaNegra": ["REX", "ROX", "ELI"],
        "detalhes": ""
    },
    {
        "nome": "RFW",
        "info": "Emite gases inflamáveis quando molhado (4.3)",
        "listaNegra": ["REX", "RCM", "ELI"],
        "detalhes": ""
    },
    {
        "nome": "ROX",
        "info": "Oxidantes (5.1)",
        "listaNegra": ["REX", "RFL", "RFS", "RSC", "RMD", "ELI"],
        "detalhes": ""
    },
    {
        "nome": "ROP",
        "info": "Peróxidos orgânicos (5.2)",
        "listaNegra": ["REX"],
        "detalhes": ""
    },
    {
        "nome": "RPB",
        "info": "Tóxicos (6.1)",
        "listaNegra": ["EAT", "HEG", "AVI", "LHO", "PER"],
        "detalhes": ""
    },
    {
        "nome": "RIS",
        "info": "Substância infecciosa (6.2)",
        "listaNegra": ["EAT", "HEG", "AVI", "LHO", "PER"],
        "detalhes": "A sigla RIS se refere à classe de artigos perigosos conhecida como substâncias infecciosas, que é identificada pelo número de risco 6.2. Esses artigos perigosos são substâncias que contêm microrganismos, como bactérias, vírus e fungos, que podem causar doenças em humanos ou animais. As RIS incluem amostras biológicas para fins de diagnóstico, pesquisa ou tratamento, bem como amostras contaminadas."
    },
    {
        "nome": "RRY",
        "info": "Radioativos - Categorias II e III (7)",
        "listaNegra": ["FIL", "HEG", "AVI", "LHO", "PER"],
        "detalhes": ""
    },
    {
        "nome": "RCM",
        "info": "Corrosivos (8)",
        "listaNegra": ["REX", "RFW", "ELI"],
        "detalhes": ""
    },
    {
        "nome": "RMD",
        "info": "Miscelânea (Diversos 9)",
        "listaNegra": ["REX", "RXS", "RFG", "RFL", "RFS", "ROX", "EAT", "HEG", "AVI", "LHO"],
        "detalhes": ""
    },
    {
        "nome": "ICE",
        "info": "Gelo Ceco (Diversos 9)",
        "listaNegra": ["REX", "HEG", "AVI"],
        "detalhes": ""
    },
    {
        "nome": "FIL",
        "info": "Filme por revelar ou Não Revelado (Diversos 9)",
        "listaNegra": ["REX", "RRY", "ELI"],
        "detalhes": ""
    },
    {
        "nome": "HUM",
        "info": "Restos mortais em esquife (Diversos 9)",
        "listaNegra": ["REX", "EAT", "HEG", "AVI", "PER"],
        "detalhes": ""
    },
    {
        "nome": "EAT",
        "info": "Alimentos (Diversos 9)",
        "listaNegra": ["REX", "RPB", "RIS", "RMD", "HUM"],
        "detalhes": ""
    },
    {
        "nome": "HEG",
        "info": "Ovo fecundado (6.2)",
        "listaNegra": ["REX", "RCL", "RPB", "RIS", "RRY", "RMD", "ICE", "HUM"],
        "detalhes": ""
    },
    {
        "nome": "AVI",
        "info": "Animal vivo (Diversos 9)",
        "listaNegra": ["REX", "RCL", "RPB", "RIS", "RRY", "RMD", "ICE", "HUM", "PER"],
        "detalhes": ""
    },
    {
        "nome": "LHO",
        "info": "Orgãos vivos ou sangue humano (6.2)",
        "listaNegra": ["REX", "RPB", "RIS", "RRY", "RMD", "PER"],
        "detalhes": ""
    },
    {
        "nome": "ELI",
        "info": "Bateria de Lítio (Diversos 9)",
        "listaNegra": ["RFL", "REX", "RXS", "RFG", "RFS", "RSC", "RFW", "ROX", "RCM", "FIL"],
        "detalhes": ""
    },
    {
        "nome": "PER",
        "info": "Perecível (Diversos 9)",
        "listaNegra": ["RRY", "RPG", "RPB", "RIS", "LHO", "AVI", "HUM"],
        "detalhes": ""
    },
    
]