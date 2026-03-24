# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


POTREBNE ZAVISNOSTI:
U terminalu nakon što ste zaustavili aplikaciju (ctrl+c) izvesti:

npm install react-bootstrap bootstrap
npm install react-router-dom



Ovo je vježbanje kroz gledanje snimke predavanja
od 09.03. do 12.03. predavanja pon uto sri četv je create

folder smo otvorili nakon npm instal vite@latest. nazvalki projekt,react,javascript i no za npm install  FipUcenje U FD2

otvorili smo cmd mjesto powershell koji smo obrisali, obrisali smo react.svg i vite.svg iz assets i public, Obrisali smo index.css  i u main.jsx import od tog css

app.jsx   obrišem sve unutar <> </> i upisem hello edunoiva

obrisemo   const [count, setCount] = useState(0)

i sve importe osim 
import './App.css'   tu je onda pročišćena

zatim u terminalu npm install zatim npm run dev


import 'bootstrap/dist/css/bootstrap.min.css'
container u app.jsx  hello edunova
  
u src create constants.js file, export const IME_APLIKACIJE= ''
create components directora sa file Izbornik veliko slovo uvijek
u izborniku jsx dodati ime aplikacije i import u vitičastim mora se pojaviti ctrl backspace

u main učitas bootstrap il ifoundation ili sl

izbornik jsx:
kopiramo bootstrap nav bar ili drugu komponentu i zaljepimo unutar containera te ctrl backspace enter da ih importa
učitaj u appjsx tu promjenu tako da mjesto hello world upises Izbornik
ctrl backspace na k od izbonik da importa
mora pisati Izbornik razmak />  onda u izborniku radiš promjene naziv itd

odlazimo u main nakon npm install react-router ,strict Mode iznad App  BrowseRouter  i import sa ctrl backspace te dodati taj app u njega

constants  ex cons routeNames i HOMEhome USLUGEusluge KONTAKTIkonktakti  (kasnije smo obrisali kontakte za sada)

kreiram pages direktorij u src  i u njemu Home.jsx gdje upišem export default function Home 
return i unutar diamonda h1 i div za sliku
kreiram Usluge pregled jsx isto u pages i pišem export def...kreiram usluge u src kao direktorij sa fileom UslugePregled

U App jsx dodajem unuatr containera routes i route  path dat će izbornik ,obrišem jednostruke upišem route names.Home pod vitičastim i importam sa ctrl backspase sve te komponente i pazim da je obavio home jsx uslugepregled route path element u vitičastim home pazi na />
homejsx  export da učita ako nema
kontakt je kao home jsx

navigate u izborniku const navigate importat use navigate
route names učitat (česte greške)

services smjerovi  su servisi učitat kasnije u constants u pages
u smjerovima datoteku file smjer.podaci js, expor const smjerovi  vitičasta objekti :sifra 1 za uslugu poput u fipu knjigovdstvo obrtnika itd sifra je atribut jedinica je vrijednost

naziv web programiranje i trajanje. to je ispod nav izbornika table vodoravno poredano cijena i datum pokretanja aktivan true false te atribute kopiramo i ljepimo te im ispravljamo podatke

u direktoriju smjerovi  novi file smjer.service    (CRUD)
async function get return import
servise zatvaramo lokalno a prema van export default get

u pages smjer pregled   export default funct smjer pregled  return prije returna hook use navigate useeffect
const smjerovi setsmjerovi  usestate
to je samo kontener gdje ih pohranjujem sa useeffect ga sa [] zatvori a izmedju vitičastih pozivamo iz asinkrone funkcije a ne možemo iz await bez asinc ali mos sam asinc 
ucitaj smjerove asinc functon await smjerservice get then arrow set smjerovi odgovor.data
return
 i dalje u smjer pregled (smjerservice smjer)
zavrtit smjer ispod return smjerovi && smjerovi map smjerarow korištenje ol i li smjer naziv da vidiš dalli radi   mjesto ol i li ucitamo -table bootstrap, -thead u njega -tr pa -th u kojem je naziv smjer kontakt itd,  
 ide naziv a to će doći iz sifre 1 iz smjerpodaci gdje se nalaze ti atributi znaci prva kolona bi bila programi tj usluge mjesto smjer,ugl sve ide u th

 onda u thead ide tbody u koje idu objekti nećemo stavljat dva ili tri td nego odmah vitičaste objet  usluge && usluge.map arow otvoreni tr u njega tabledata (td) i stavljamo opet vitičaste usluge.naziv malim slovom jer je naziv atributa iz gdje je i sifra 1
sljedeci td je cijena,datum,true false...i ostqaviš dvije prazne ćelije td


potrebne zavisnosti priprema :npm install react-number-format nakon cmd instalacije vidis u package json zavisnosti

smjer pregled gdje je cijena napravim prored izmedju dva td i format je zavisnost Nume i daje mi izbornik  da odaberem</>  ide value smjer cijena dislay tipe '' opet izbornik txt pa tousand separator '', decimal separator'',supix, decimascale,fixdecimalscale za 10,99  i copy pastas ako trebas još


npm repo za number ili slične komponente na webu
potrebne zavisnosti priprema:
potražim react icons , npm install react-icons u cmd
u smjerpregled gdje pise aktivan ili false true, dodajem grvalidate -iz react iconica naziv, izbornik mi ponudi,</> ,on učita ctrlbackspase,mozes upisivat size,color,u vitičastim

pravimo favicpon iz rect icons odaberemo win shift c da oznacimo malu ikonicu i uređujemo ju u notepadu 

trazimo favicon na icons kopiramo ga u paintu izrezemo i ubacimo i public favicom kad extrahiramo. ovabezno u index html dodati link favicon






novi smjer
prvo kreiram ime rute u constants (home smjerovi ,smjerovi_novi) kroz smjerovi kroz novi 

u pages u smjerovi napravim datoteku file smjernovi.jsx
u to export default func smjernovi  return diamond unos novog smjera kapo pripremu
u app jsx dodam novu rutu path SMJEROVI_NOVI
import se mora pojavitii objekt posto treba postojat u izborniku
u smjer preghled jsx dodajem link za dodavanje novog smjera, linku dodajem route names kao objekt
trebao bi biti ugnježđen ispod nav bara 

smjer novi jsx export def func smjernovi u diamondu ubacim neki h 
 ispod ubacim form iz react bootstrapa da se dogodi import unutar form ide formgroup controlID i unutar toga formgrup stavim form label ono štpo čovjek vidi ide unutra  a nakon label ide formcontrol i nema djecu kojem definiramo svojstva i required za da se mora upisivati da nedaje covjeku dalje dok ne upise u formu unossnog polja  nesto 
 form control text required
 type number može sa step za kursor dodavanja  
 cijena bi bila isto number ali step je 0.01 zbog decimala
 preglednici na hrv jeziku stave zarez a eng točku

 za date je datumpokretanja controlid

 type je date name je datumPokretanja
 u  polju ce biti kalendar za izbor

 a za bulean je checkbox aktivan i check iname i label je aktivan

 iza toga ide row i unutra col i importaj iz izbornika iz react bootstrapa
 odustani gumb se pojavljuje ,još jedan takav gumb za odustani mjesto teksta za gumb pišem unutar col link react bootstrap iz izbornika i unutar linka tek pišem odustani tekst koji se vidi na gumbu korisniku


 unutar row elementa uguram class name margin top mt-4 da ga odmaknem od table 

 taj link ima route names iz constants route

 



















































