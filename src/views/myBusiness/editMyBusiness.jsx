import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import TemporaryDrawer from "../../components/navBar/mobileDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import EditTienda from "../../components/myBusiness/editTienda";
import MobileUbicacion from "../../components/myBusiness/mobileUbicacion";
import MobileConsultas from "../../components/myBusiness/mobileConsultas";
import Imagenes from "../../components/myBusiness/imagenes";
import { AllCategory } from "../../services/hostConfig";
import { getToken } from './../../setting/auth-helpers';

const styles = theme => ({
    root: {
        background: '#000000',
        flexGrow: 1,
    },
    paperContainer: {
        height: '90px',
        marginTop: '2vh',

    },
    background: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        width: 'auto'
    },
    test: {

        position: 'relative'
    }
});


class EditMyBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {  categorys: [] };
    }

    componentDidMount() {
        this.loadCategorys();       
    }

   
    loadCategorys = (e) => {
        let URI = AllCategory();
        const token = getToken();
        fetch(URI, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response)
                return response.json();
            }).then(response => {
                this.setState({categorys:response})
                return response;
            })
            .catch(e => {
                console.log(e);
            })

    }

    
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Grid container className={classes.root} component="main" maxWidth="md" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid className={classes.test} container maxWidth="md" component="main" >
                        <Container component="main" maxWidth="md">
                            <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Grid item container xs={2} xl={4} sm={4} className={classes.paperContainer}>
                                    <TemporaryDrawer />
                                </Grid>
                                <Grid xs={8} xl={8} sm={8} container justify='flex-start'>
                                    <Typography style={{
                                        flexGrow: 1,
                                        paddingLeft: '10px',
                                        align: "center",
                                        textAlign: 'center',
                                        color: "#999999",
                                        fontFamily: "Poppins",
                                        fontWeight: 400,
                                        fontSize: '19px',

                                    }}>
                                        Editar Mi Negocio
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} container justify='flex-end' alignItems={"center"}>
                                    <Link href='/mybusiness'><FontAwesomeIcon icon={faAngleLeft} style={{
                                        color: '#777777', fontSize: "26px", align: 'right', marginRight: '20px'
                                    }} /></Link>
                                </Grid>
                            </Grid>

                        </Container>

                        <Grid container direction={"column"} style={{ padding: '0 24px' }}>
                            <Grid item>
                                <EditTienda  categorys={this.state.categorys}/>
                            </Grid>
                            <Grid item >
                                <MobileUbicacion />
                            </Grid>
                            <Grid item style={{ marginBottom: '32px' }}>
                                <Imagenes />
                            </Grid>
                            <Grid item style={{ marginBottom: '32px' }}>
                                <MobileConsultas />
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </React.Fragment>

        );
    }
}
export default withStyles(styles, { withTheme: true })(EditMyBusiness);