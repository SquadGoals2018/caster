import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { Table } from 'reactstrap';
import { Card, Button, CardImg, CardText, CardDeck, CardBody } from 'reactstrap';

class Events extends Component {
  render() {
    var NavStyle= {
     textAlign: "right",
     font: "Helvetica",
     width: 2000,
     color: "#2F4F4F"
    };
    var CardStyle = {
      textAlign: "center",
      width: 2000, 
      font: "Helvetica",
      marginLeft: 150,
      
    };
    var CardsStyle = {
      textAlign: "center",
      width: 150, 
      font: "Helvetica"

    };
    return (
      <div>
        <Alert color="primary"><b>HEADER</b></Alert>
        <div style={NavStyle}>
        <Table borderless>
        <tr>
            <a href="/some/valid/uri#top">Profile &nbsp; &nbsp;</a>
            <b><u>Events</u></b>
            <a href="/some/valid/uri#top"> &nbsp; &nbsp;Plans</a>          
        </tr>
        </Table>
        </div>

        <div style={CardStyle}>
        <Table borderless>
        <thead>
      <tr>
      <th>LAND</th>
      <th> </th>
      <th>WATER</th>
      </tr>
  </thead>
          <tr>
            <td>
        <CardDeck>
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Hiking</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>

          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Golf</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
      
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Camping</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>

          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Canyoning</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
          
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Cycling</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
        </CardDeck>
        </td>
       <div style={CardsStyle}>
        <Table borderless>
        
        </Table>
        </div>


            <td>
        <CardDeck>
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Kayaking</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>

          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Jet Ski</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
      
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Fishing</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>

          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Swimming</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
          
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Water Rafting</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
        </CardDeck>
        </td>
        </tr>
        </Table>   
        </div>


        <div style={CardStyle}>
        <Table borderless>
          <tr>
            <td>
        <CardDeck>
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Rock Climbing </CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>

          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Horse Riding</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
      
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Shooting</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>

          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Skateboarding</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
          
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Running</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
        </CardDeck>
        </td>
       <div style={CardsStyle}>
        <Table borderless>
        
        </Table>
        </div>

        
            <td>
        <CardDeck>
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Wakeboarding</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>

          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Sailing</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
      
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Surfing</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>

          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Sky Dive</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
          
          <Card>
          <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Canoeing</CardText>
          <Button>Choose</Button>
          </CardBody>
          </Card>
        </CardDeck>
        </td>
        </tr>
        </Table>   
        </div>
    </div>
    );
  }
}

export default Events;
