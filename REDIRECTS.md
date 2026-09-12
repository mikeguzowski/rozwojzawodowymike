# Przekierowania

Dodawaj skrócone adresy w pliku `redirects.json`.

```json
{
  "/yt": "https://youtube.com",
  "/linkedin": "https://www.linkedin.com/in/michalguzowski/"
}
```

- Klucz to ścieżka po domenie, zawsze zaczynająca się od `/`.
- Wartość to pełny adres docelowy zaczynający się od `https://` albo `http://`.
- Każda kolejna para musi być oddzielona przecinkiem.
- Po opublikowaniu zmian `/yt` i `/yt/` będą przekierowywać na adres zapisany przy `/yt`.

Mechanizm działa przez `404.html`, dlatego skróty nie mogą mieć takich samych ścieżek jak istniejące katalogi strony, na przykład `/firma/` albo `/privacy/`.
