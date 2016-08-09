import React, { PropTypes } from 'react'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';


class Work extends React.Component {
  render () {
    return(
      <div className="work">
        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
          </CardMedia>
        </Card>
        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="http://images0.cnblogs.com/blog2015/735908/201505/310040524547672.jpg" />
          </CardMedia>
        </Card>
        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
          </CardMedia>
        </Card>
        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
          </CardMedia>
        </Card>
        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg" />
          </CardMedia>
        </Card>
      </div>
    )
  }
}

export default Work;
