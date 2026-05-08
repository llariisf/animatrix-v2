const animes = [

    {
        nome: "Violet Evergarden",
        genero: "Drama",
        nota: 9.3,
        censura: 14,
        episodios: 13,
        linkImagem: "https://cupulatrovao.com.br/wp-content/uploads/2021/03/Violet-ajoelhada-em-um-lago-de-Violet-Evergarden.jpg",
        resumo: "Uma ex-soldado aprende a viver e entender emoções escrevendo cartas.",
        curiosidade: "O anime é conhecido por ter uma das animações mais bonitas já feitas."
    },

    {
        nome: "Attack on Titan",
        genero: "Ação/Drama",
        nota: 9.1,
        censura: 18,
        episodios: 89,
        linkImagem: "https://upload.wikimedia.org/wikipedia/pt/7/7a/Shingeki_no_Kyojin_2%C2%AA_temporada.jpg",
        resumo: "Humanidade luta contra titãs gigantes que devoram pessoas.",
        curiosidade: "O autor planejou o final da história desde o início."
    },

    {
        nome: "Jujutsu Kaisen",
        genero: "Sobrenatural",
        nota: 8.7,
        censura: 16,
        episodios: 47,
        linkImagem: "https://i.pinimg.com/736x/25/db/a5/25dba53ae14630b01af7f695f88abc37.jpg",
        resumo: "Um estudante entra no mundo das maldições após ingerir um objeto amaldiçoado.",
        curiosidade: "Gojo virou um dos personagens mais populares dos animes recentes."
    },

    {
        nome: "Demon Slayer",
        genero: "Fantasia",
        nota: 8.8,
        censura: 16,
        episodios: 55,
        linkImagem: "https://img.elo7.com.br/product/zoom/26A822C/big-poster-anime-demon-slayer-kimetsu-no-yaiba-lo12-90x60-cm-poster-anime.jpg?_gl=1*d4ezel*_gcl_au*MTM1MzY2MTQ2LjE3NzgyNzkzNjY.*_ga*Mzk1MTkxNDc1LjE3NzgyNzkzNjY.*_ga_22YVRK2WCW*czE3NzgyNzkzNjUkbzEkZzAkdDE3NzgyNzkzNjUkajYwJGwwJGgxMjQ4MjYyMDI3",
        resumo: "Um jovem luta contra demônios para salvar sua irmã.",
        curiosidade: "O filme do anime bateu recordes de bilheteria no Japão."
    },

    {
        nome: "Berserk",
        genero: "Dark Fantasy",
        nota: 9.4,
        censura: 18,
        episodios: 25,
        linkImagem: "https://img.elo7.com.br/product/zoom/46CCC3C/poster-anime-berserk-a2-tamanho-60x42-cm-lo02-poster.jpg?_gl=1*1259efs*_gcl_au*MTM1MzY2MTQ2LjE3NzgyNzkzNjY.*_ga*Mzk1MTkxNDc1LjE3NzgyNzkzNjY.*_ga_22YVRK2WCW*czE3NzgyNzkzNjUkbzEkZzEkdDE3NzgyNzk0MjkkajYwJGwwJGgxMjQ4MjYyMDI3",
        resumo: "A jornada brutal de Guts em um mundo sombrio e cheio de violência.",
        curiosidade: "É uma das obras mais influentes do gênero dark fantasy."
    },

    {
        nome: "O Castelo Animado",
        genero: "Fantasia",
        nota: 9.0,
        censura: 10,
        episodios: 1,
        linkImagem: "https://ovicio.com.br/wp-content/uploads/2024/02/20240220-castelo.jpeg",
        resumo: "Uma jovem amaldiçoada encontra um misterioso mago em um castelo mágico.",
        curiosidade: "O filme é do famoso Studio Ghibli."
    },

    {
        nome: "Tokyo Ghoul",
        genero: "Terror",
        nota: 8.5,
        censura: 18,
        episodios: 48,
        linkImagem: "https://m.media-amazon.com/images/I/71aIUtWoqHL._SY425_.jpg",
        resumo: "Um jovem se torna meio-ghoul e precisa sobreviver em dois mundos.",
        curiosidade: "A obra mistura terror com questões existenciais."
    },

    {
        nome: "Devilman Crybaby",
        genero: "Terror",
        nota: 8.6,
        censura: 18,
        episodios: 10,
        linkImagem: "https://i0.wp.com/quintacapa.com.br/wp-content/uploads/2018/01/Devilman-crybaby-destaque-v4-726x400.jpg?resize=726%2C400&ssl=1g",
        resumo: "Demônios invadem o mundo e um jovem se torna um deles para lutar.",
        curiosidade: "O anime é extremamente intenso e polêmico."
    },

    {
        nome: "Dandadan",
        genero: "Sobrenatural",
        nota: 8.7,
        censura: 16,
        episodios: 12,
        linkImagem: "https://upload.wikimedia.org/wikipedia/pt/1/14/Dandadan_temp1.jpg",
        resumo: "Uma mistura caótica de aliens, espíritos e comédia.",
        curiosidade: "O mangá viralizou rapidamente pela sua originalidade."
    },

    {
        nome: "Haikyuu!!",
        genero: "Esporte",
        nota: 8.9,
        censura: 10,
        episodios: 85,
        linkImagem: "https://m.media-amazon.com/images/I/71DRngOUBAS._AC_SY879_.jpg",
        resumo: "Um time de vôlei luta para chegar ao topo.",
        curiosidade: "Inspirou muitas pessoas a praticarem vôlei."
    },

    {
        nome: "Given",
        genero: "Romance/Drama",
        nota: 8.6,
        censura: 14,
        episodios: 11,
        linkImagem: "https://upload.wikimedia.org/wikipedia/pt/7/7f/Given_Vol_1.png",
        resumo: "Um grupo de jovens forma uma banda e enfrenta seus sentimentos.",
        curiosidade: "É muito elogiado pela trilha sonora."
    },

    {
        nome: "A Voz do Silêncio",
        genero: "Drama",
        nota: 9.2,
        censura: 12,
        episodios: 1,
        linkImagem: "https://jornal.unifal-mg.edu.br/wp-content/uploads/2025/03/Filme-A-Voz-do-Silencio.jpg",
        resumo: "Um jovem tenta se redimir após ter praticado bullying no passado.",
        curiosidade: "Aborda temas profundos como depressão e redenção."
    },

    {
        nome: "Kakegurui",
        genero: "Psicológico",
        nota: 8.3,
        censura: 16,
        episodios: 24,
        linkImagem: "https://sucodemanga.com.br/wp-content/uploads/2017/08/kakegurui-image.jpg",
        resumo: "Uma escola onde o poder é decidido através de apostas.",
        curiosidade: "Os personagens têm expressões extremamente exageradas."
    },

    {
        nome: "Banana Fish",
        genero: "Drama",
        nota: 9.0,
        censura: 18,
        episodios: 24,
        linkImagem: "https://upload.wikimedia.org/wikipedia/pt/d/d7/Banana_Fish_anime_artwork.jpg",
        resumo: "Uma história intensa envolvendo crime, amizade e trauma.",
        curiosidade: "É baseado em um mangá clássico dos anos 80."
    },

    {
        nome: "Vinland Saga",
        genero: "Histórico",
        nota: 9.2,
        censura: 18,
        episodios: 48,
        linkImagem: "https://cupulatrovao.com.br/wp-content/uploads/2019/11/Vinland-Saga-imagem-de-capa-not%C3%ADcia.jpg",
        resumo: "Um jovem viking busca vingança e sentido para sua vida.",
        curiosidade: "A obra é baseada em eventos históricos reais."
    }

];



function mostrarAnimes() {

    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";

    let idade = document.getElementById("idadeUsuario").value;

    animes.forEach(anime => {

        const card = document.createElement("div");

        if(anime.nota > 9 && anime.episodios > 100){
            card.classList.add("premium");
        }

        card.classList.add("card");

        let classificacao = anime.nota >= 9
        ? "Obra-Prima"
        : "Muito Bom";

        let restrito = idade < anime.censura;

        card.innerHTML = `
            <div class="${restrito ? 'restrito' : ''}">
                <img src="${anime.linkImagem}">
            </div>

            <div class="conteudo">
                <h2>${anime.nome}</h2>

                <p class="genero">
                    ${anime.genero}
                </p>

                <p class="nota">
                     Nota: ${anime.nota}
                </p>

                <p>
                    ${classificacao}
                </p>

                ${
                    restrito
                    ?
                    `<div class="aviso">
                        Conteúdo Restrito 
                    </div>`
                    :
                    `
                    <p>${anime.resumo}</p>

                    <div class="curiosidade">
                        <strong>Você sabia?</strong>
                        <p>${anime.curiosidade}</p>
                    </div>
                    `
                }
            </div>
        `;

        catalogo.appendChild(card);
    });
}