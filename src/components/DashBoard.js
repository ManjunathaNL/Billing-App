import React from 'react'
import {useSelector} from 'react-redux'
import { makeStyles} from "@material-ui/core/styles"
import Chart from "react-google-charts"
import { Container,  Grid, Typography,Card, CardActionArea,  CardActions, CardContent, Button, Typograph} from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    appBarDiv : {
        
        backgroundColor: 'teal'
    },
    toolbarDiv : {
        margin : 'auto'
    },
    buttonUi : {
        color: 'turquoise'
    }
}))

const DashBoard = (props) => {
    const classes = useStyles()
    const customers = useSelector((state) => {
        return state.customers
    })

    const products = useSelector((state) => {
        return state.products
    })

    const bills = useSelector((state) => {
        return state.bills
    })

    // Only Last 5 Bills
    // const chartData = [
    //     ['Customer Name', 'Total Price']
    //   ]
    // let last5BillsTotal = 0

    // for(const bill of bills){
    //     if(chartData.length <= 5){
    //         last5BillsTotal += bill.total
    //         const cusName = customers.find(cus => cus._id === bill.customer)
    //         // const pctName = products.find(pct=> pct._id ===bill.products)
    //         chartData.push([(cusName && cusName.name), bill.total])
    //     }else{
    //         break
    //     }
    // }

    return (
        <Container style={{textAlign : 'center'}}>
            <Typography variant="inherit" component="h1" style={{ textAlign : 'center', color : 'turquoise'}}>USER DASHBOARD</Typography> <br/> <br/>
            <Grid container spacing={2} justify="center" >
                <Grid item xs={12} sm={4}>
                    <Card elevation={8} style={{ backgroundColor : 'white', color:'turquoise'}}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                            Number of Customers
                            </Typography>
                            <Typography variant="h3" component="h2">
                            {customers.length} 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card elevation={8} style={{ backgroundColor : 'white', color:'turquoise'}}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Number of Products
                                </Typography>
                                <Typography variant="h3" component="h2">
                                {products.length}
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card elevation={8} style={{ backgroundColor : 'white', color:'turquoise'}}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Number of Billings
                                </Typography>
                                <Typography variant="h3" component="h2">
                                {bills.length}
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>

                {/* <Grid item xs={12} sm={4} justify="center" alignItems="center">
                    <Card elevation={8} style={{ backgroundColor : 'teal', color:'turquoise'}}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Last 5 Bills
                                </Typography>
                                <div >
                                <Chart  
                                     chartType="PieChart"
                                     loader={<div>Loading Chart</div>}
                                     data={chartData}
                                    // data={[
                                    //     ['Title', 'Progress'],
                                    //     [`Customer's`, customers.length],
                                    //     [`Product's`, products.length],
                                    //     [`Order's`, bills.length],
                                    // ]}
                                     options={{
                                       title: `Total : ₹{last5BillsTotal}`,
                                       'is3D':true,
                                       width :'353px',
                                       height:'200px'
                                     }}
                                     rootProps={{ 'data-testid': '1' }}
                                   />
                                </div> 
                            </CardContent>
                    </Card>
                </Grid> */}

                    <Grid item xs={6}>
                    <Typography variant="h4" component="h6"  style={{color:'green', textAlign : 'center'}}> Top Sales Progress</Typography>
                    <Card>
                    {/* <Grid container >
                <Grid xs={12} sm={6}> */}
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                         ['Title', 'Progress'],
                        [`Customer's`, customers.length],
                        [`Product's`, products.length],
                        [`Order's`, bills.length],
                    ]}
                    
                    rootProps={{ 'data-testid': '1' }}
                />
                {/* </Grid>
            </Grid> */}
            </Card>
            
                </Grid>
            </Grid>

        </Container>
    )
}

export default DashBoard