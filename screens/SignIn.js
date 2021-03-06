import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { connect } from 'react-redux';


function SignIn(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
		// envoie vers la page Accueil si l'utilisateur est déjà connecté ou si il se connecte
		if(props.data != undefined && Object.keys(props.data.user).length != 0){
        props.navigation.replace('Dashboard');
		}
	});

  const handlePress = () => {
    //navigation.navigate('Tableau de bord');
    if(!email || !password){
      Alert.alert('Erreur', 'Merci de remplir tous les champs');
    }
    else{
      props.navigation.replace('Dashboard');
      /*
    axios.post("http://10.0.10.42:8000/api/login_check", {
			username: email,
			password: password
		})
			.then((response) => {
        let user = {
          "id": response.data.data.id,
          "username": response.data.data.username,
          "token": response.data.token
        };
				const action = { type: "GET_INFOS_USER", data: user }
				props.dispatch(action);
				//userInfos(response.data.token, props.dispatch, true, props, false, "login");
        console.log(props.data)
        setEmail('');
        setPassword('');
        
			})
			.catch((error) => {
        console.log(error)
				Alert.alert(
					"Erreur",
					"Impossible de se connecter, merci de vérifier vos informations de connexion."
				);
        setEmail('');
        setPassword('');
			});*/
    }
  };

  return (
    <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#6f86d6', '#4D99D8']}
        style={styles.background}
      />
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Nom d'utilisateur"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.formInput}
        placeholder="Mot de passe"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.buttonText} onPress={handlePress}>
        <Text style={styles.textButton}>Me connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("S'inscrire")} >
        <Text style={styles.noAccount}>Je n'ai pas encore de compte</Text>
       </TouchableOpacity>
       
    </View>
  );
}

const mapStateToProps = (state) => {
	return {
		data: state.login.data,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch: (action) => { dispatch(action) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  logo:{
    width: 250,
    height: 175,
    marginBottom:30
  },
  formInput:{
    //borderColor: "#4D99D8",
    //borderWidth:2,
    borderRadius:10,
    padding: 10,
    marginTop:20,
    marginBottom:10,
    width:"85%",
    height:55,
    backgroundColor:"#fff"
  },
  buttonText: {
    color: '#000',
    //backgroundColor: "#4D99D8",
    backgroundColor:"#fff",
    padding:10,
    borderRadius:20,
    width:250,
    display:"flex",
    alignItems:"center",
    marginTop:30
  },
  textButton:{
    fontSize:18,
    color:"#4D99D8",
    fontWeight:'700'
  },
  noAccount:{
    marginTop:20,
    color:"#fff"
  }
});