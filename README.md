# Casa Vibra Luz — Site oficial (V1)

## Como abrir
Abra `index.html` no navegador (duplo clique) ou publique a pasta inteira em qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, cPanel etc.). Todos os links são relativos, então a estrutura de pastas deve ser mantida:

```
index.html
a-casa.html
quartos.html
experiencias.html
localizacao.html
avaliacoes.html
contato.html
css/styles.css
js/main.js
```

## O que já está pronto
- Home completa com hero, leitura estratégica da marca (Chegue/Descubra/Ancore/Vibre), teaser da Casa, preview de quartos, preview de experiências, localização com mapa, seção de prova social (estrutura) e CTA final.
- Páginas internas: A Casa, Quartos, Experiências, Localização, Avaliações, Contato/Reserva — navegação completa e funcional entre todas.
- Identidade visual aplicada conforme o Manual de Marca revisado: paleta #02315F / #8F3324 / #E48F12 / #FDF1E5, Cormorant Garamond + Montserrat.
- Mobile-first, menu mobile em tela cheia, botão de WhatsApp flutuante.
- SEO técnico: meta tags, Open Graph, canonical, dados estruturados JSON-LD (LodgingBusiness) com NAP real.
- Estrutura de avaliações pronta para receber integração futura com Google/Booking/Airbnb, sem dados inventados.

## O que é placeholder (não é dado real)
Todo bloco marcado com `rotulo-placeholder` no código ou com `.aviso-pendente` no visual indica conteúdo que ainda depende de material real: fotos, fichas de quartos, experiências oferecidas, distâncias, dados de avaliação e canais oficiais adicionais.

## Próximos passos técnicos sugeridos
1. Substituir `.midia-espaco` por `<img>` reais assim que as fotos forem entregues (a estrutura de proporção/aspect-ratio já está pronta).
2. Preencher as fichas de quartos com dados confirmados.
3. Implementar a camada de dados de reputação (backend/serverless) conforme a especificação de avaliações do projeto, e então conectar a seção `.fontes-avaliacao` a essa camada.
4. Validar distâncias e experiências antes de publicá-las.
