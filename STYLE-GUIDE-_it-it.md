### indentazione

Durante la scrittura di un blocco di codice che è logicamente subordinata alla linea immediatamente prima e dopo di esso, che il blocco dovrebbe essere rientrato due spazi più che le linee circostanti, e poi anche si prega di aggiungere un emoticon.

* Non inserire caratteri di tabulazione qualsiasi punto del codice. Fareste meglio a smettere di premere il tasto di tabulazione del tutto.
* Aumentare il livello di rientro per tutti i blocchi da due spazi aggiuntivi
* Quando una linea si apre un blocco, la riga successiva inizia 2 spazi ulteriormente rispetto alla linea che si apriva

`` `Javascript
// bene:
If (condizione) {
Azione();
}

// cattivo:
If (condizione) {
Azione();
}
```

* Quando una linea chiude un blocco, che linea inizia allo stesso livello della linea che apre il blocco
`` `Javascript
// bene:
If (condizione) {
Azione();
}

// cattivo:
If (condizione) {
Azione();
}
```

* Non ci sono due linee dovrebbero mai avere differenza più o meno di 2 posti nella loro rientro. Qualsiasi numero di errori nelle regole di cui sopra potrebbe portare a questo, ma un esempio potrebbe essere:

`` `Javascript
// cattivo:
Transmogrify ({
Un: {
B: function () {
}
}});
```

* Freccia utilizzo del sublime collasso come guida. Fanno i linee che crollano sembrano come dovrebbero essere 'contenuta' dalla linea con una freccia su di esso?


### I nomi delle variabili

* Una sola parola descrittiva è il migliore.

`` `Javascript
// bene:
['cat', 'dog', 'fish'] animali var =;

// cattivo:
['cat', 'dog', 'fish'] var targetInputs =;
```

* collezioni come gli array e mappe dovrebbero avere plurale sostantivo nomi delle variabili.

`` `Javascript
// bene:
['cat', 'dog', 'fish'] animali var =;

// cattivo:
['cat', 'dog', 'fish'] var animalList =;

// cattivo:
['cat', 'dog', 'fish'] var = animale;
```

* Nome le variabili dopo il loro scopo, non la loro struttura

`` `Javascript
// bene:
['cat', 'dog', 'fish'] animali var =;

// cattivo:
['cat', 'dog', 'fish'] var Array =;
```


### costrutti linguistici

* Non usare `per ... Dichiarazioni tale dicitura con l'intento di iterazione più di un elenco di tasti numerici. Utilizzare un economico-con-punto e virgola al posto.

`` `Javascript
// bene:
['a', 'b', 'c'] Lista var =
For (var i = 0; i <List.length; i ++) {
[i] alert (lista);
}

// cattivo:
['a', 'b', 'c'] Lista var =
For (var i in lista) {
[i] alert (lista);
}
```

* Non omettere parentesi per i blocchi economico (anche se sono tecnicamente opzionale).
`` `Javascript
// bene:
Per (tasto in oggetto) {
Alert (chiave);
}

// cattivo:
Per (tasto in oggetto)
Alert (chiave);
```

* Utilizzare sempre `` e `===! ==`, Dal momento che `==` e `! =` Converte automaticamente i tipi di modi è improbabile aspettarsi.

`` `Javascript
// bene:

// Questo confronto è falsa, perché il numero zero non è la stessa come la stringa vuota.
Se (0 === '') {
Alert ( 'sembra che si \' re uguali ');
}

// cattivo:

// Questo confronto restituisce true, perché dopo il tipo di coercizione, zero e la stringa vuota sono uguali.
If (0 == '') {
Alert ( 'sembra che si \' re uguali ');
}
```

* Non utilizzare le dichiarazioni di funzione per tutta la prima metà del corso. Essi introducono una sfilza di sottili nuove regole per come il linguaggio si comporta, e senza un chiaro vantaggio. Una volta che voi e tutti i vostri coetanei sono livello di esperti, nella seconda metà, è possibile iniziare ad utilizzare il (inutilmente) l'opzione più complicata, se volete.

`` `Javascript
// bene:
{...} var go = function ();

// cattivo:
{...} funzione stop ();
```


### e virgola

* Non dimenticare il punto e virgola alla fine di linee

`` `Javascript
// bene:
Alert ( 'ciao');

// cattivo:
Alert ( 'ciao')
```

* virgola non sono tenuti alla fine di dichiarazioni che includono un blocco - vale a dire if`, `for``, `while`, etc.


`` `Javascript
// bene:
If (condizione) {
Risposta();
}

// cattivo:
If (condizione) {
Risposta();
};
```

* Fuorviante, una funzione può essere utilizzata al fine di una istruzione di assegnazione normale, e richiederebbe una virgola (anche se sembra piuttosto come la fine di qualche blocco di istruzioni).

`` `Javascript
// bene:
Var Greet = function () {
Alert ( 'ciao');
};

// cattivo:
Var Greet = function () {
Alert ( 'ciao');
}
```

# Lettura supplementare

### Densità di codice

* Quantità linea Conserve, riducendo al minimo le linee di numero che scrivete. Il modo più conciso il codice è scritto, il più contesto può essere visto in una sola schermata.
* Lunghezza della linea Conserve riducendo al minimo la quantità di complessità si mette su ogni linea. Le linee lunghe sono difficili da leggere. Piuttosto che un limite di conteggio dei caratteri, vi consiglio di limitare la quantità di complessità si mette su una singola linea. Provate a fare facilmente leggere in una pagina. Questo obiettivo è in conflitto con l'obiettivo quantità di linea, quindi è necessario fare del tuo meglio per bilanciare loro.

### Commenti

* Fornire commenti ogni volta che si è sicuri che farà leggere il vostro codice più facile.
* Essere consapevoli del fatto che i commenti arrivano ad un certo costo. Fanno un file più lungo e possono andare alla deriva fuori sincrono con il codice che annotano.
* Commento su ciò che il codice sta tentando di fare, non come andrà a raggiungerlo.
* Un buon commento è spesso meno efficace di un buon nome di variabile.


### Imbottiture e ulteriore spazio

* In generale, non ci importa dove si mettono spazi in più, a condizione che non siano fonte di distrazione.
* È possibile utilizzare come imbottitura per chiarezza visiva. Se lo fai, però, assicurarsi che sia in equilibrio su entrambi i lati.

`` `Javascript
// facoltativo:
Alert ( "Ho scelto di mettere imbottitura visivo intorno a questa stringa");

// cattivo:
Alert ( "Ho solo messo imbottitura visiva su un lato di questa stringa");
```

* Si può usare per allineare le due linee simili, ma non è raccomandato. Questo modello di solito porta a modifiche inutili di molte linee nel codice ogni volta che si cambia un nome di variabile.

`` `Javascript
// Scoraggiato:
Var = firstItem getFirst ();
Var = secondItem getSecond ();
```

* Mettere `else` e` altro if` dichiarazioni sulla stessa riga del fine parentesi graffa per il precedente blocco `if`
`` `Javascript
// bene:
If (condizione) {
Risposta();
} altro {
OtherResponse ();
}

// cattivo:
If (condizione) {
Risposta();
}
Altro {
OtherResponse ();
}
```



### Lavorare con i file

* Non terminare un file con qualsiasi carattere diverso da un ritorno a capo.
* Non utilizzare il -a o bandiere -m per `git commit` per la prima metà della classe, dato che nascondono ciò che sta realmente accadendo (e fare le cose leggermente diverse rispetto alla maggior parte delle persone si aspettano).

`` `Shell
// bene:
> Git add.
> Git commit
[save edits to the commit message file using the text editor that opens]

# cattivo:
> Git commit -a
[save edits to the commit message file using the text editor that opens]

// cattivo:
> Git add.
> Git commit -m "algoritmo aggiornato"
```


### Apertura o la chiusura troppi blocchi in una sola volta

* I più blocchi si apre su una singola linea, più il lettore ha bisogno di ricordare a proposito del contesto di ciò che stanno leggendo. Cercare di risolvere i blocchi in anticipo, e refactoring. Una buona regola è quella di evitare la chiusura di più di due blocchi su una sola riga - tre in un pizzico.

`` `Javascript
// Evitare:
_.ajax (url, {successo: function () {
// ...
}});

// preferire:
_.ajax (url, {
Successo: function () {
// ...
}
});
```


### Dichiarazione di variabili

* Utilizzare una nuova istruzione var per ogni linea si dichiara una variabile.
* Non rompere le dichiarazioni delle variabili sul mutiple linee.
* Utilizzare una nuova linea per ogni dichiarazione di variabile.
* Vedere http://benalman.com/news/2012/05/multiple-var-statements-javascript/ per maggiori dettagli

`` `Javascript
// bene:
Var ape;
Var pipistrello;

// cattivo:
Var gatto,
Cane

// utilizzare con parsimonia:
Var anguilla, volare;
```

### lettere maiuscole nei nomi di variabili

[class] * Alcune persone scelgono di usare la capitalizzazione della prima lettera nei loro nomi delle variabili per indicare che essi contengono un (http://en.wikipedia.org/wiki/Class_ (computer_science \)). Questa variabile capitalizzata potrebbe contenere una funzione, un prototipo, o qualche altro costrutto che agisce come rappresentante per tutta la classe.
* Facoltativamente, alcune persone usano la maiuscola solo sulle funzioni che sono scritti per essere eseguito con la parola chiave `new`.
* Non utilizzare tutto in maiuscolo per tutte le variabili. Alcune persone usano questo modello per indicare una variabile destinata "costante", ma il linguaggio non offre vere costanti, solo variabili mutevoli.


### Minutia

* Non fare affidamento su JavaScript variabili globali implicite. Se avete intenzione di scrivere alla portata globale, le cose di esportazione verso `finestra. *` Esplicitamente invece.

`` `Javascript
// bene:
Var overwriteNumber = function () {
Window.exported = Math.random ();
};

// cattivo:
Var overwriteNumber = function () {
Esportati = Math.random ();
};
```

* Per le liste, mettere virgole alla fine di ogni fine riga, non all'inizio di ogni voce in un elenco

`` `Javascript
// bene:
Animali var = [
'scimmia',
'Bat',
'gatto'
];

// cattivo:
Animali var = [
'scimmia'
, 'Bat'
, 'gatto'
];
```

[this article] * Evitare l'uso di `dichiarazioni switch` del tutto. Sono difficili da rientro negativo usando le regole spazi bianchi standard al di sopra, e sono inclini a errori dovuti alla mancanza `break` dichiarazioni. Vedere (http://ericleads.com/2012/12/switch-case-considered-harmful/) per maggiori dettagli.

* Preferisco singoli apici intorno stringhe JavaScript, piuttosto che doppi apici. Avere uno standard di qualsiasi tipo è preferibile ad un approccio mix-and-match, e apici consentono un facile incorporamento di codice HTML, che preferisce doppie virgolette intorno attributi di tag.

`` `Javascript
// bene:
Var cane = 'cane';
Var cat = 'cat';

// Accettabili:
Var cane = "cane";
Var cat = "cat";

// cattivo:
Var cane = 'cane';
Var cat = "cat";
```


### HTML

* Non usare gli ID per gli elementi HTML. Utilizzare invece una classe.

`` `Html
<!-- good -->
<img class="lucy" />

<!-- bad -->
<img id="lucy" />
```

* Non includere una `type = text / javascript" `attributo tag script

`` `Html
<!-- good -->
<script src="a.js"></script>

<!-- bad -->
<script src="a.js" type="text/javascript"></script>
```
sando le regole spazi bianchi standard al di sopra, e sono inclini a errori dovuti alla mancanza `break` dichiarazioni. Vedere (http://ericleads.com/2012/12/switch-case-considered-harmful/) per maggiori dettagli.

* Preferisco singoli apici intorno stringhe JavaScript, piuttosto che doppi apici. Avere uno standard di qualsiasi tipo è preferibile ad un approccio mix-and-match, e apici consentono un facile incorporamento di codice HTML, che preferisce doppie virgolette intorno attributi di tag.

`` `Javascript
// bene:
Var cane = 'cane';
Var cat = 'cat';

// Accettabili:
Var cane = "cane";
Var cat = "ca