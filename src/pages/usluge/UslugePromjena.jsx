import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import { Button, Col, Form, Row } from "react-bootstrap"
import { RouteNames } from "../../constants"
import UslugeService from "../../services/usluge/UslugeService"

export default function UslugePromjena(){

    const navigate = useNavigate()
    const params = useParams()
    const [usluga, setUsluga] = useState({})
    const [aktivan, setAktivan] = useState(false)

    useEffect(()=>{
        ucitajUslugu()
    },[])

    async function ucitajUslugu() {
        await UslugeService.getBySifra(params.sifra).then((odgovor)=>{
            const u = odgovor.data
            u.datumPokretanja = u.datumPokretanja.substring(0,10)
            setUsluga(u)
            setAktivan(u.aktivan)
           // console.table(odgovor.data)
        })
    }

    async function promjeni(usluga) {
        await UslugeService.promjeni(params.sifra,usluga).then(()=>{
            navigate(RouteNames.USLUGE)
        })
    }

    function odradiSubmit(e){
        e.preventDefault()
        const podaci = new FormData(e.target)
        promjeni({
            naziv: podaci.get('naziv'),
            
            cijena: parseFloat(podaci.get('cijena')),
            datumPokretanja: new Date(podaci.get('datumPokretanja')).toISOString(),
            akcija: aktivan
        })
    }

    return(
         <>
            <h3>Promjena smjera</h3>
            <Form onSubmit={odradiSubmit}>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required 
                    defaultValue={usluga.naziv}/>
                </Form.Group>

                

                <Form.Group controlId="cijena">
                    <Form.Label>Cijena</Form.Label>
                    <Form.Control type="number" name="cijena" step={0.01} 
                    defaultValue={usluga.cijena}/>
                </Form.Group>

                <Form.Group controlId="datumPokretanja">
                    <Form.Label>Datum pokretanja usluge</Form.Label>
                    <Form.Control type="date" name="datumPokretanja" 
                    defaultValue={usluga.datumPokretanja}/>
                </Form.Group>

                <Form.Group controlId="akcija">
                    <Form.Check label="Akcija" name="akcija" type="checkbox"
                        
                    
                    onChange={(e)=>{setAktivan(e.target.checked)}}/>
                </Form.Group>

                <Row className="mt-4">
                    <Col>
                        <Link to={RouteNames.USLUGE} className="btn btn-danger">
                            Odustani
                        </Link>
                    </Col>
                    <Col>
                        <Button type="submit" variant="success">
                            Spremi prmjene
                        </Button>
                    </Col>
                </Row>

            </Form>
        </>
    )
}