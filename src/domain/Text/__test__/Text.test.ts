import Text from "@src/domain/Text/Text";
import Language from "@src/domain/Language/Language";

const portuguesContent = `Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.

“Conjunto de palavras e frases articuladas, escritas sobre qualquer suporte”.

“Obra escrita considerada na sua redação original e autêntica (por oposição a sumário, tradução, notas, comentários, etc.)”.

"Um texto é uma ocorrência linguística, escrita ou falada de qualquer extensão, dotada de unidade sociocomunicativa, semântica e formal. É uma unidade de linguagem em uso."

O interesse pelo texto como objeto de estudo gerou vários trabalhos importantes de teóricos da Linguística Textual, que percorreram fases diversas cujas características principais eram transpor os limites da frase descontextualizada da gramática tradicional e ainda incluir os relevantes papéis do autor e do leitor na construção de textos.

Um texto pode ser escrito ou oral e, em sentido lato, pode ser também não verbal.

Texto crítico é uma produção textual que parte de um processo reflexivo e analítico gerando um conteúdo com crítica construtiva e bem fundamentada.

Em artes gráficas, o texto é a parte verbal, linguística, por oposição às ilustrações.

Todo texto tem que ter alguns aspectos formais, ou seja, tem que ter estrutura, elementos que estabelecem relação entre si. Dentro dos aspectos formais temos a coesão e a coerência, que dão sentido e forma ao texto. "A coesão textual é a relação, a ligação, a conexão entre as palavras, expressões ou frases do texto”.[4] A coerência está relacionada com a compreensão, a interpretação do que se diz ou escreve. Um texto precisa ter sentido, isto é, precisa ter coerência. Embora a coesão não seja condição suficiente para que enunciados se constituam em textos, são os elementos coesivos que lhes dão maior legibilidade e evidenciam as relações entre seus diversos componentes, a coerência depende da coesão.`

const greekContent = `«Ηπρώτη μου επαφή με την Καππαδοκία ήταν η συμμετοχή μου το 2015 σ′ένα πρόγραμμα αγροτουρισμού. Την πρώτη φορά έμεινα ακριβώς 48 μέρες και εκεί άλλαξε όλη η τύχη μου και η… διαμονή μου».

Η απόφαση της συγγραφέως και καλλιτέχνιδας Dr. Μαρίας Μανή να αλλάξει εντελώς σελίδα στη ζωή της έπειτα από ένα ταξίδι δεν είναι μοναδική. Πολλοί άνθρωποι έχουν ερωτευθεί ένα μέρος με την πρώτη ματιά, όπως έγινε στην περίπτωσή της με την Καππαδοκία. Ωστόσο, η επιλογή της να ζήσει εκεί ήταν αφενός δύσκολη, αφετέρου ιδιαίτερη, καθώς η ίδια δεν αποφάσισε να νοικιάσει κάποιο διαμέρισμα, όπως συνηθίζεται, αλλά να μετατρέψει τις πέτρες… σε σπίτι. 

Οπως περιγράφει η ίδια στην «Κ», δεν είχε άλλωστε πολλές επιλογές, καθώς για να μπορεί να μοιράζει τον χρόνο της μεταξύ Ελλάδας και Καππαδοκίας, έπρεπε είτε να αγοράσει ένα κομμάτι γης είτε να παντρευτεί κάποιον εκεί. 

Η ίδια προτίμησε να κάνει το πρώτο και έτσι αγόρασε ένα κομμάτι γης σε ένα χωριό 11 χιλιόμετρα έξω από την πόλη Προκόπη της Καππαδοκίας, το οποίο οι ντόπιοι στη γλώσσα τους αποκαλούν «Λευκό Χωριό».`;

const japaneseContent = `『いろどり　生活の日本語』は、国際交流基金が開発したテキストです。

基礎的な日本語のコミュニケーション能力の獲得を目的としています。

対象は、初級レベルの日本語学習者です。（基本的な挨拶や自己紹介ができる、非常に簡単な会話ができるレベル）

種類豊富な音声ファイルも自由にダウンロードが可能です。無料で音声ファイルまである教材は中々ないので、非常に魅力的なポイントです！！`;

const arabicContent = `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.`;

describe('Text-related tests', () => {
    it('should separate a latin text into words', () => {
        const language = Language.create(
            'Português', 
            ['https://google.com'], 
            '\-\'a-zA-ZÀ-ÖØ-öø-ȳЀ-ӹ', 
            undefined, // ----> make this better (turn into object)
            undefined, 
            'Mr.|Dr.|[A-Z].|Vd.|Vds.'
        );
        const text = Text.create(language.getLanguageId());
        const wds = text.processTextContent(
            portuguesContent,
            language.getSettings().getValue().languageCharacters,
            language.getSettings().getValue().sentenceEndings, 
            language.getSettings().getValue().sentenceEndingExceptions
        );
        
        expect(wds.length).toBe(24);
    });

    it('should separate a greek text into words', () => {
        const language = Language.create(
            'Greek', 
            ['https://google.com'],
            'a-zA-ZÀ-ÖØ-öø-ȳͰ-Ͽἀ-ῼ',
            undefined,
            undefined,
            'Mr.|Dr.|[A-Z].|Vd.|Vds.',
        );
        const text = Text.create(language.getLanguageId());
        const wds = text.processTextContent(
            greekContent,
            language.getSettings().getValue().languageCharacters,
            language.getSettings().getValue().sentenceEndings, 
            language.getSettings().getValue().sentenceEndingExceptions
        );

        expect(wds.length).toBe(12);
    });

    it('should separate an arab language into words', () => {
        const language = Language.create(
            'Arabic',
            ['https://google.com'],
            'x0600-x06FFx0750-x077FxFB50-xFDFFxFE70-xFEFF',
            undefined,
            '.!?:;؛،',
            'Mr.|Dr.|[A-Z].|Vd.|Vds.',
            undefined, // implement this one
            'right-to-left'
        );
        const text = Text.create(language.getLanguageId());
        const wds = text.processTextContent(
            arabicContent,
            language.getSettings().getValue().languageCharacters,
            language.getSettings().getValue().sentenceEndings, 
            language.getSettings().getValue().sentenceEndingExceptions
        );
        
        expect(wds.length).toBe(13);
    });

    it('should separate a CJK text into ideograms', () => {
        const language = Language.create('Japanese', ['https://google.com'], '一-龥ぁ-ヾ々', true, '.!?:;。！？：；');
        const text = Text.create(language.getLanguageId());
        const wds = text.processTextContent(
            japaneseContent, 
            language.getSettings().getValue().languageCharacters,
            language.getSettings().getValue().sentenceEndings, 
            language.getSettings().getValue().sentenceEndingExceptions,
            language.getSettings().getValue().splitEachChar
        );

        expect(wds.length).toBe(12);

    });
});