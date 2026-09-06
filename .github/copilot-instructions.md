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
