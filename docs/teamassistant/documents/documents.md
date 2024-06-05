# Dokumenty

Dokumenty, pojící se k danému případu, jsou dostupné na detailu ```případu/úkolu```. Všechny dokumenty, ke kterým má uživatel přístup, jsou dostupné v sekci "Dokumenty".

## Atributy dokumentů

Každý dokument obsahuje následující atributy

- **Název** - název dokumentu

- **Vložil** - uživatel, který danou verzi dokumentu nahrál do aplikace

- **Vloženo** - datum, kdy byla daná verze dokumentu nahrána do aplikace

- **Revize** -  obsahuje informaci, kolik verzí dokumentu bylo nahráno, údaj roste s počtem nově uložených verzí nehledě na uživatele, který verzi nahral

- **Indexace**  - Po provedení indexace umožňuje aplikace vyhledávání v obsahu dokumentu. Aby tato funkce fungovala, je nutné aktivovat a nainstalovat ElasticSearch, což umožní indexaci dokumentů. Ve výchozím nastavení je tato funkce deaktivována.

- **Ve vyhledávání**  - označeno jako Ano nebo ne, popsáno v atribútu "Indexace"

- **Případ** - název a proklik do případu, ke kterému byl dokument nahrán (pokud byl dokument nahrán z případu)

- **Logický typ souboru** - výběr z číselníku

:::danger[Číselník]
Číselník spravuje role $Administrator v sekci Administrace > DMS atributy > Atribut > Logický typ
:::

- **Zařazení do složky** - složka, do které je dokument zařazen, složky lze zakládat a členit podle potřeby v sekci ```Dokumenty```

# Akce na dokumentu

## Náhled
Zobrazení náhledu dokumentu

## Revize
Zobrazení revizí dokumentů s možností jejich stažení

## Stáhnout
Stažení aktuální verze dokumentu do vašeho počítače

:::tip[Číselník]
Musíte mít povolené stahování z této stránky, zkontrolujte nastavení prohlížeče
:::


## Smazat (dostupné pouze pro roli $DMSDelete)
Možnost smazat všechny verze dokumentu