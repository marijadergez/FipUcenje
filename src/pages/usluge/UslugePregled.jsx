import { useEffect, useState } from "react"
import UslugeService from "../../services/usluge/UslugeService"
import { Table } from "react-bootstrap"
import { NumericFormat } from "react-number-format"

import { GrAdd, GrValidate } from "react-icons/gr"
import FormatDatuma from "../../components/FormatDatuma"
import { Link } from "react-router-dom"
import { RouteNames } from "../../constants"




export default function UslugePregled() {

    const [usluge, setUsluge] = useState([])

    useEffect(() => {
        ucitajUsluge()
    }, [])

    async function ucitajUsluge() {
        await UslugeService.get().then((odgovor) => {
            setUsluge(odgovor.data)
        })

    }


    return (
        <>

            <Link to={RouteNames.USLUGE_NOVI}
            className="btn btn-success w-100 my-3">
                <GrAdd/> Dodaj novu uslugu
            </Link>

            <Table>

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
                    {usluge && usluge.map((usluge) => (
                        <tr key={usluge.sifra}>
                            <td>{usluge.naziv}</td>
                            
                            <td>
                                <NumericFormat
                                    value={usluge.cijena}
                                    displayType={'text'}
                                    thousandSeparator='.'
                                    decimalSeparator=','
                                    suffix=' €'
                                    prefix='= '
                                    decimalScale={2}
                                    fixedDecimalScale  />

                            </td>
                           
                            <td>
                                <GrValidate
                                    size={25}
                                    color={usluge.aktivan ? 'green' : 'red'}
                                />
                            </td>

                             <td>
                                <FormatDatuma datum={usluge.datumPokretanja} />
                            </td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}