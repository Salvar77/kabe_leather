import React from "react";
import classes from "./polityka-prywatnosci.module.scss";
import SEO from "@/components/Main/SEO";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <SEO
        title="Polityka Prywatności - KabeTintLeather Auto Detailing"
        description="Zapoznaj się z naszą Polityką Prywatności. Dowiedz się, jak chronimy dane osobowe użytkowników korzystających z usług KabeTintLeather Auto Detailing."
        image="https://www.kabetintleather.opole.pl/owner-kamil-brzoskwinia-kabetintleather.jpg"
        url="https://www.kabetintleather.opole.pl/polityka-prywatnosci"
      />
      <div id="polityka-prywatnosci" className={classes.policy}>
        <h1>Polityka Prywatności</h1>
        <h2>1. Informacje Ogólne</h2>
        <p>
          Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony
          danych osobowych przekazanych przez Użytkowników w związku z
          korzystaniem przez nich z usług Kabe Tint&Leather Auto Detailing za
          pośrednictwem Serwisu.
        </p>

        <h2>2. Administrator Danych Osobowych</h2>
        <p>
          Administratorem danych osobowych zawartych w serwisie jest Kabe
          Tint&Leather Auto Detailing z siedzibą w Generała Emila Fieldorfa 12,
          45-268 Opole, NIP: 7543343759, REGON: 389837340.
        </p>

        <h2>3. Zbieranie Danych</h2>
        <p>
          W ramach korzystania z Serwisu, Użytkownicy mogą być proszeni o
          podanie swoich danych osobowych poprzez wypełnienie formularza
          kontaktowego. Dane te mogą obejmować:
        </p>
        <ul>
          <li>Imię i nazwisko</li>
          <li>Adres e-mail</li>
          <li>Numer telefonu</li>
          <li>Treść wiadomości</li>
        </ul>

        <h2>4. Cel Przetwarzania Danych</h2>
        <p>Dane osobowe Użytkowników są przetwarzane w celu:</p>
        <ul>
          <li>
            Umożliwienia kontaktu z Użytkownikiem w celu odpowiedzi na przesłane
            zapytania,
          </li>
          <li>
            Realizacji usług oferowanych przez Kabe Tint&Leather Auto Detailing,
          </li>
          <li>
            Przesyłania informacji handlowych i marketingowych za zgodą
            Użytkownika.
          </li>
        </ul>

        <h2>5. Podstawa Przetwarzania Danych</h2>
        <p>
          Dane osobowe są przetwarzane na podstawie zgody wyrażonej przez
          Użytkownika oraz w przypadkach, gdy przepisy prawa upoważniają
          Administratora do przetwarzania danych osobowych na podstawie
          przepisów prawa.
        </p>

        <h2>6. Przekazywanie Danych</h2>
        <p>
          Dane osobowe Użytkowników mogą być przekazywane podmiotom trzecim
          jedynie w przypadkach, gdy jest to niezbędne do realizacji usług
          oferowanych przez Serwis lub na podstawie zgody Użytkownika.
        </p>

        <h2>7. Prawa Użytkowników</h2>
        <p>Użytkownik ma prawo do:</p>
        <ul>
          <li>Dostępu do swoich danych osobowych,</li>
          <li>
            Sprostowania, usunięcia lub ograniczenia przetwarzania danych,
          </li>
          <li>Wniesienia sprzeciwu wobec przetwarzania danych,</li>
          <li>Przenoszenia danych,</li>
          <li>Wycofania zgody na przetwarzanie danych w dowolnym momencie.</li>
        </ul>

        <h2>8. Kontakt</h2>
        <p>
          W przypadku pytań dotyczących niniejszej Polityki Prywatności lub
          przetwarzania danych osobowych, prosimy o kontakt pod adresem e-mail:
          kabetint@gmail.com.
        </p>

        <h2>9. Zmiany w Polityce Prywatności</h2>
        <p>
          Kabe Tint&Leather Auto Detailing zastrzega sobie prawo do wprowadzania
          zmian w Polityce Prywatności. O wszelkich zmianach Użytkownicy będą
          informowani poprzez odpowiednie komunikaty w Serwisie.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
