# Wytyczne dla AI

Te zasady obowiązują przy każdej kolejnej zmianie interfejsu i treści w tym projekcie.

## Wytyczne stylistyczne

### 1. Ogólny charakter

- minimalistyczny, lekki, profesjonalny;
- bardziej nowoczesny SaaS / consulting / personal brand niż klasyczne CV;
- dużo białej przestrzeni;
- informacje mają być łatwe do przeskanowania w kilka sekund;
- bez ozdobników, które nie przenoszą informacji.

### 2. Kolorystyka

- tło: ciepła biel / bardzo jasny krem;
- tekst główny: bardzo ciemny granat lub grafit;
- jeden dominujący akcent: niebieski;
- dodatkowe kolory pastelowe tylko do rozróżniania kategorii: delikatny fiolet, zieleń, róż, pomarańcz;
- kolory są przygaszone, bez mocnych, agresywnych barw.

### 3. Typografia

- nowoczesny sans-serif, np. Inter, Manrope, DM Sans;
- główny tytuł bardzo duży, ciężki, uppercase;
- nagłówki sekcji: bold/semibold, uppercase;
- treść: regular/medium;
- wyraźna hierarchia: tytuł -> nazwa sekcji -> etykieta -> opis;
- niewiele różnych wielkości fontu.

### 4. Karty

- duży border-radius, około 16-20 px;
- bardzo cienka jasnoszara ramka;
- brak albo niemal niewidoczny cień;
- duży padding;
- sekcje nie mogą być napchane;
- nagłówek sekcji może mieć bardzo delikatne pastelowe tło.

### 5. Ikony - kluczowa zasada

Ikona oznacza sekcję, a nie każdą informację.

Maksymalnie trzy główne ikony:

- Moja kariera;
- Mój styl;
- Moje osiągnięcia.

Bez ikon przy nazwach etapów i kategorii osiągnięć. Tam wystarczą tekst, kolor i hierarchia.

### 6. Prezentowanie procesów

Kariera i sposób pracy mają być przedstawiane jako proste ciągi:

Programista -> Konsultant -> Przedsiębiorca -> Doradca -> Lider IT

Zrozumieć -> Podważyć -> Uporządkować -> Zdecydować -> Zrobić mały krok

Strzałka jest elementem funkcjonalnym. Nie dodajemy kółek, ilustracji ani ikon do każdego etapu.

### 7. Osiągnięcia

Każde osiągnięcie składa się tylko z dwóch poziomów:

SPRZEDAŻ

Zbudowałem firmę z 4 mln rocznego obrotu.

Etykieta kategorii jest małym pastelowym pill/tagiem, a pod nią znajduje się jedno konkretne zdanie. Liczby i rezultaty są ważniejsze od grafiki.

### 8. Najważniejsza zasada całego projektu

Design ma organizować treść, a nie konkurować z treścią.

Mniej ikon, mniej kolorów, mniej ramek i mniej dekoracji. Hierarchię budujemy przede wszystkim wielkością, odstępami, typografią i układem, a dopiero na końcu kolorem.

## Zasady implementacji

- Zachowuj sens i kolejność treści ze źródłowych plików XML, chyba że użytkownik wskaże nową kolejność.
- Używaj lokalnych zasobów z katalogu Resources zamiast zewnętrznych obrazów, gdy są dostępne.
- Po każdej zmianie sprawdzaj desktop, mobile, obrazy, linki i brak poziomego overflow.
- Nie dodawaj dekoracji ani ikon do pojedynczych etapów, opinii lub osiągnięć bez wyraźnej potrzeby.
- Nie twórz powtórzonych sekcji o tej samej nazwie. Jeden temat powinien mieć jedno czytelne miejsce.

## SEO, AI Search i GEO

- Buduj poprawny HTML5 z `header`, `main`, `section`, `article`, `aside` i `footer` tam, gdzie odpowiada to treści.
- Każda podstrona lub widok ma mieć jeden logiczny `h1`, hierarchię `h2`/`h3` oraz kluczową treść dostępną jako tekst HTML bez nietypowej interakcji.
- Konsekwentnie używaj encji Michał „Mike” Guzowski: inżynier, przedsiębiorca, doradca, mentor i wykładowca związany z Politechniką Warszawską.
- Naturalnie opisuj obszary pracy: rozwój zawodowy, decyzje zawodowe i biznesowe, mentoring, przedsiębiorczość, zarządzanie, sprzedaż B2B, technologia i transformacja cyfrowa.
- Naturalnie wskazuj główne grupy odbiorców: specjaliści, inżynierowie, managerowie, founderzy/przedsiębiorcy i osoby rozważające zmianę zawodową lub biznesową.
- Pisz sekcje w układzie: problem lub pytanie -> krótka odpowiedź -> wyjaśnienie -> przykład albo dowód -> następny krok.
- Oddzielaj doświadczenie, osiągnięcia, role zawodowe, metodę pracy, opinie i case studies. Łącz twierdzenia z konkretnymi rezultatami.
- Dodawaj JSON-LD tylko dla danych widocznych i możliwych do zweryfikowania. Preferuj `Person`, `WebSite`, `WebPage`, `Article`/`BlogPosting` i `BreadcrumbList` zgodnie z faktyczną treścią.
- Każdy indeksowalny widok powinien mieć unikalny tytuł, opis, canonical, Open Graph i robots metadata. Nie twórz fikcyjnych danych: brakujące wartości oznacz jako TODO.
- Utrzymuj logiczne linkowanie między stroną główną, ofertą, problemami, case studies, FAQ i kontaktem. Anchor text ma opisywać cel linku.
- Dbaj o techniczne SEO: `sitemap.xml`, `robots.txt`, spójne URL-e, HTTPS, crawlability, responsywność, alt, wymiary obrazów, lazy loading i Core Web Vitals.
- Nie blokuj crawlerów AI bez wyraźnej przyczyny i nie stosuj nieudokumentowanych „hacków” AI SEO.
- Po zmianach przygotuj krótkie podsumowanie wdrożeń, TODO, problemów SEO/GEO, brakujących danych schema.org i elementów do ręcznej weryfikacji.
- Dla stron publicznych stosuj osobne katalogi z własnymi plikami `index.html`, np. `o-mnie/index.html`, `male-kroki/index.html`, `firma/index.html` i `privacy/index.html`; nie używaj hashy jako głównego routingu, jeśli można zastosować prawdziwe ścieżki URL.
