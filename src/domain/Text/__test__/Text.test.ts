import Text from "@src/domain/Text/Text";
import Language from "@src/domain/Language/Language";

const content: string = `«Ηπρώτη μου επαφή με την Καππαδοκία ήταν η συμμετοχή μου το 2015 σ′ένα πρόγραμμα αγροτουρισμού. Την πρώτη φορά έμεινα ακριβώς 48 μέρες και εκεί άλλαξε όλη η τύχη μου και η… διαμονή μου».

Η απόφαση της συγγραφέως και καλλιτέχνιδας Μαρίας Μανή να αλλάξει εντελώς σελίδα στη ζωή της έπειτα από ένα ταξίδι δεν είναι μοναδική. Πολλοί άνθρωποι έχουν ερωτευθεί ένα μέρος με την πρώτη ματιά, όπως έγινε στην περίπτωσή της με την Καππαδοκία. Ωστόσο, η επιλογή της να ζήσει εκεί ήταν αφενός δύσκολη, αφετέρου ιδιαίτερη, καθώς η ίδια δεν αποφάσισε να νοικιάσει κάποιο διαμέρισμα, όπως συνηθίζεται, αλλά να μετατρέψει τις πέτρες… σε σπίτι. 

Οπως περιγράφει η ίδια στην «Κ», δεν είχε άλλωστε πολλές επιλογές, καθώς για να μπορεί να μοιράζει τον χρόνο της μεταξύ Ελλάδας και Καππαδοκίας, έπρεπε είτε να αγοράσει ένα κομμάτι γης είτε να παντρευτεί κάποιον εκεί. 

Η ίδια προτίμησε να κάνει το πρώτο και έτσι αγόρασε ένα κομμάτι γης σε ένα χωριό 11 χιλιόμετρα έξω από την πόλη Προκόπη της Καππαδοκίας, το οποίο οι ντόπιοι στη γλώσσα τους αποκαλούν «Λευκό Χωριό».`;

const sentenceNumber = 7;

describe('Text-related tests', () => {
    it('should separate a text into sentences', () => {
        const language = Language.create('Português');
        const text = Text.create(language.getLanguageId());

        const sentences = text.separateSentences(content, '.?;');

        expect(sentences).toHaveLength(sentenceNumber);
    });

    it('should separate a sentence into words', () => {
        const language = Language.create('Português');
        const text = Text.create(language.getLanguageId());
        const sentences = text.separateSentences(content, '.?;');

        let wds: string[][] = [];
        for (let sentence of sentences) {
            const words = text.separateWords(sentence);
            wds.push(words);
        }

        for (let i = 0; i < wds.length; i++) {
            for (let j = 0; j < wds[0].length; j++) {
                console.log(wds[0][0])
            }
        }
        expect(wds[0].length).toBeGreaterThan(0);

    });
});