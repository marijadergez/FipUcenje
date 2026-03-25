import { Link, useNavigate } from "react-router-dom";
import UslugeService from "../../services/usluge/UslugeService";
import { RouteNames } from "../../constants";
import { Button, Col, Form, FormControl, FormGroup, Row } from "react-bootstrap";


export default function UslugeNovi(){

    const navigate = useNavigate()

    async function dodaj(usluga){
        
        await UslugeService.dodaj(usluga).then(()=>{
             navigate(RouteNames.USLUGE) 
        })
       
    }
        
     function odradiSubmit(e){
        e.preventDefault()
        const podaci = new FormData(e.target)
        dodaj({
            naziv: podaci.get('naziv'),
            trajanje: parseInt(podaci.get('trajanje')),
            cijena: parseFloat(podaci.get('cijena')),
            datumPokretanja: new Date(podaci.get('datumPokretanja')).toISOString(),
            aktivan: podaci.get('aktivan') === 'on'
        })


    }

    return(
        <>
        <h3 className="mt-5">Unesite novu custom uslugu</h3>
          <Form onSubmit={odradiSubmit}>
            <FormGroup controlId="naziv">
                <Form.Label>Unesite Naziv ili opis</Form.Label>
                <FormControl  type="text" name="naziv" required/>
            </FormGroup>

            <Form.Group className="mt-5" controlId="datumPokretanja">
                    <Form.Label >Datum pokretanja custom usluge</Form.Label>
                    <Form.Control  type="date" name="datumPokretanja" />
                </Form.Group>


            <Form.Group className="mt-5" controlId="cijena">
                <Form.Label>Očekivana cijena</Form.Label>
                <Form.Control type="number" name="cijena" step={0.01} />

            </Form.Group>

             <Row className="mt-4">

                <Col>
                <Link to={RouteNames.USLUGE} className="btn btn-danger">
                Odustani
                </Link>
                </Col>

                <Col>
                <Button type="submit" variant="success">
                    Dodaj novu uslugu
                </Button>
                </Col>
                
                
                
                
            </Row>   






          </Form>
        
        
        </>
    )



}