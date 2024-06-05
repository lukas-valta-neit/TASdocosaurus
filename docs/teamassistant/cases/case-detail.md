
# Detail případu

Z detailu případu lze vykonávat akce na případu, prohlížet jeho historii, proměnné, atd.. Vzhled detailu případu je přizpůsoben procesům.

## Akce případu

Všechny možné akce na případu jsou dostupné v 2. hlavičce obrazovky.

## Zavřít

Zavře detail případu a vrátí uživatele na předchozí stránku

## Více

### Oprávnění

#### Viditelnost případu

Tabulka s přehledem uživatelů, kteří mají viditelnost k případu, a informace o tom, na základě čeho viditelnost získali

#### Události

Tabulka s přehledem uživatelů, kteří mají oprávnění ke spuštění událostí nad případem, a informace o tom, na základě čeho oprávnění získali

### Tisk

Dokumenty procesu lze tisknout do PDF (možné také uložit jako dokument případu) nebo HTML formátu

### Proměnné

Seznam všech proměnných procesu a jejich hodnoty

:::danger[Role]
 Pouze role $Administrator může upravovat hodnoty proměnných
:::

### Historie
Zobrazený přehled veškeré historie případu s řešitelem a datumy, kdy byl úkol vygenerován, případně splněn. 
Všechny nabízené možnosti nad jednotlivými úkoly jsou dostupné pod třemi tečkami na každém řádku úkolu:

#### Detail

Zobrazí detail úkolu s možností vidět aktuální neboli historické hodnoty. 

**Aktuální hodnoty** - hodnoty proměnných, které jsou pro případ aktuální v tento moment

**Historické hodnoty** - hodnoty a proměnné, které byly během zpracování úkolu změněny

#### Vnořený

Možnost prokliku do podprocesu, pokud byl úkol řešen podprocesem

#### Kontakt

Kontakt na řešitele úkolu

### Graf

Zobrazen celý graf procesu, z kterého byl případ spuštěn a řízen

### Nadřazený

Proklik na nadřazený případ, dostupné pouze pokud je aktuální případ řešen jako podproces

### Změna entity (dostupné pouze pro administrátora)

Možnosti změny případu ze Servisních operaci, které jsou popsané 

## Událost

Seznam událostí, které je možno nad případem spustit

# Informace k případu

Informace k případu jsou dostupné v 2. hlavičce obrazovky.

## Logy (dostupné pouze pro administrátora)

Logy případu, které obsahují jak informace o průběhu případu, tak případné errory a upozornění. Více informaci naleznete 

## Aktuální úkoly

Po kliknutí na Aktuální úkoly je zobrazen rychlý náhled seznamu aktuálních úkolů případu s možností hledání, akce na každém úkolu, nebo otevření rozšiřeného módu dokumentu.

### Akce na úkolu

#### Detail

Zobrazení detailu úkolu

#### Řešit

Možnost řešit úkol v případě, že jste řešitelem tohoto úkolu

#### Vnořený

Možnost řešit úkol v případě, že jste řešitelem tohoto úkolu

#### Předat

Úkol je přiřazen uživateli, vybranému ze seznamu uživatelů

#### Převzít

Úkol je přiřazen uživateli, který převzetí spustí

#### Kontakt

Kontak na řešitele úkolu

#### Časování

Možnost úpravy časování řešení úkolu

## Dokumenty více najdete v sekci Dokumenty

Po kliknutí na Dokumenty je zobrazen rychlý náhled seznamu dokumentů případu s možností hledání, akce na každém dokumentu, přidaní nového souboru nebo otevření rozšířeného módu dokumentu.

### Akce na dokumentu

#### Náhled

Zobrazení náhledu dokumentu

#### Revize

Zobrazení revizí s možnosti stáhnutí předchozích verzí dokumentu

#### Stáhnout

Stažení aktuální verze dokumentu do počítače

:::tip[Povolené stahování]
 Musí být povolené stahování z dané stránky, zkontrolujte nastavení prohlížeče
:::

#### Smazat (dostupné pouze pro roli $DMSDelete)

Možnost smazat všechny verze dokumentu

## Poznámky

Po kliknutí na Poznámky je zobrazen rychlý náhled poznámek případu s možností přidání nové poznámky.