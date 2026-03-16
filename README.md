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

izbornik jsx:
kopiramo bootstrap nav bar ili drugu komponentu i zaljepimo unutar containera te ctrl backspace enter da ih importa
učitaj u appjsx tu promjenu tako da mjesto hello world upises Izbornik
ctrl backspace na k od izbonik da importa
mora pisati Izbornik razmak />  onda u izborniku radiš promjene naziv itd

odlazimo u main nakon npm install react-router ,strict Mode iznad App  BrowseRouter  i import sa ctrl backspace te dodati taj app u njega

constants  ex cons routeNames i HOMEhome USLUGEusluge KONTAKTIkonktakti

kreiram pages direktorij u src  i u njemu Home.jsx gdje upišem export default function Home 
return i unutar diamonda h1 i div za sliku
kreiram Usluge pregled jsx isto u pages i pišem export def...kreiram usluge u src kao direktorij sa fileom UslugePregled

U App jsx dodajem unuatr containera routes i route  path obrišem jednostruke upišem route names.Home pod vitičastim i importam sa ctrl backspase sve te komponente i pazim da je obavio










