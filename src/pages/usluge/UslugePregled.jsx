import { useEffect, useState } from "react"
import UslugeService from "../../services/usluge/UslugeService"
import { Button, Table } from "react-bootstrap"
import { NumericFormat } from "react-number-format"

import { GrAdd, GrValidate } from "react-icons/gr"
import FormatDatuma from "../../components/FormatDatuma"
import { Link, useNavigate } from "react-router-dom"
import { RouteNames } from "../../constants"





export default function UslugePregled() {

    const navigate = useNavigate()
    const [usluge, setUsluge] = useState([])

    useEffect(() => {
        ucitajUsluge()
    }, [])

    async function ucitajUsluge() {
        await UslugeService.get().then((odgovor) => {
            setUsluge(odgovor.data)
        })

    }

    async function obrisi(sifra) {
        if(!confirm('Sigurno obrisati?')){
            return
        }
        await UslugeService.obrisi(sifra)
        ucitajUsluge()
        
    }


    return (
        <>

            <Link to={RouteNames.USLUGE_NOVI}
                className="btn btn-success w-100 my-3">
                <GrAdd /> Dodaj novu uslugu
            </Link>

            <Table hover bordered responsive>

                <thead>
                    <tr>
                        <th>Naziv usluge</th>
                        <th>Cijena </th>
                        <th>Popust</th>
                        <th>Datum upisa</th>
                        <th>Akcija</th>

                    </tr>
                </thead>
                <tbody>
                    {usluge && usluge.map((usluga) => (
                        <tr key={usluga.sifra}>
                            <td>{usluga.naziv}</td>

                            <td>
                                <NumericFormat
                                    value={usluga.cijena}
                                    displayType={'text'}
                                    thousandSeparator='.'
                                    decimalSeparator=','
                                    suffix=' €'
                                    prefix='= '
                                    decimalScale={2}
                                    fixedDecimalScale />

                            </td>

                            <td>
                                <GrValidate
                                    size={25}
                                    color={usluga.popust ? 'green' : 'red'}
                                />
                            </td>

                            <td>
                                <FormatDatuma datum={usluga.datumPokretanja} />
                            </td>
                            <td>

                                <Button onClick={()=>{navigate(`/usluge/${usluga.sifra}`)}}>
                                    Promjeni
                                </Button>
                                        &nbsp;&nbsp;

                                <Button variant="danger" onClick={()=>{obrisi(usluga.sifra)}}> 
                                    Obriši
                                </Button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}