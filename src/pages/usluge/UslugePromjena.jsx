import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UslugeService from "../../services/usluge/UslugeService";
import { RouteNames } from "../../constants";
import { Button, Col, Form, FormControl, FormGroup, Row } from "react-bootstrap";

export default function UslugePromjena(){

    const navigate = useNavigate()
    const params = useParams()
    const [usluga,setUsluga] =useState({})
    const [popust,setPopust] =useState(false)

    useEffect(
        ()=>{
            ucitajUsluge()
        },[])

        async function ucitajUsluge() {
            await UslugeService.getBySifra(params.sifra).then((odgovor)=>{
                const s = odgovor.data
                
                s.datumPokretanja = s.datumPokretanja.substring(0,10)
                setUsluga(s)
                setPopust(s.popust)
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
                popust: popust

            })
        }

        return(
        <>
        <h3 className="mt-5">Unesite promjenu</h3>
          <Form onSubmit = {odradiSubmit}>
            <FormGroup controlId="naziv">
                <Form.Label>Unesite Naziv dosadašnje usluge ili opis</Form.Label>
                <FormControl  type="text" name="naziv" required
                defaultValue={usluga.naziv}/>
            </FormGroup>

            <Form.Group className="mt-5" controlId="datumPokretanja">
                    <Form.Label >Datum promjene koju unosite</Form.Label>
                    <Form.Control  type="date" name="datumPokretanja" 
                    defaultValue={usluga.datumPokretanja}/>
                </Form.Group>


            <Form.Group className="mt-5" controlId="cijena">
                <Form.Label>Očekivana cijena izmjene</Form.Label>
                <Form.Control type="number" name="cijena" step={0.01} 
                defaultValue={usluga.cijena}/>

            </Form.Group>

              <Form.Group controlId="popust">
                    <Form.Check label="Popust" name="popust" 
                    checked={popust}
                    onChange={(e)=>{setPopust(e.target.checked)}}/>
                </Form.Group>


             <Row className="mt-4">

                <Col>
                <Link to={RouteNames.USLUGE} className="btn btn-danger">
                Odustani
                </Link>
                </Col>

                <Col>
                <Button type="submit" variant="success">
                   Promjeni uslugu
                </Button>
                </Col>
                
                
                
                
            </Row>   






          </Form>
        
        
        </>

        )
    }



