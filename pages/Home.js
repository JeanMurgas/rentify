import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import banner from '../assets/banner-home.png';
import globos from '../assets/globos.jpg';
import bocinas from '../assets/bocinas.jpg';
import catering from '../assets/catering.jpg';
import vestido from '../assets/vestido.jpg';
import silla from '../assets/silla.jpg';

const Home = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    email: '',
    phone: '',
    location: '',
    businessDescription: ''
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenidos a Rentify</Text>
          <Text style={styles.subtitle}>Somos el marketplace líder en Panamá para alquiler de artículos destinados a eventos de todo tipo.</Text>
          <View style={styles.boxContainer}>
            <View style={styles.bigBox}>
              <View style={styles.discountText}>
                <View style={styles.discountContainer}>
                  <Text style={styles.discountTextValue}>25%</Text>
                  <Text style={styles.discountTextLabel}>OFF</Text>
                  <Text style={styles.discountTextValue}>25%</Text>
                </View>
                <View style={styles.discountContainer}>
                  <Text style={styles.discountTextLabel}>25%</Text>
                  <Text style={styles.discountTextValue}>OFF</Text>
                  <Text style={styles.discountTextLabel}>25%</Text>
                </View>
              </View>
              <View style={styles.infoText}>
                <Text style={styles.infoTitle}>EN TU PRIMER ALQUILER TODO EL MES DE JUNIO</Text>
                <Text style={styles.infoDescription}>
                  Para celebrar nuestro lanzamiento, estamos ofreciendo un 25% de descuento en tu primer alquiler durante el primer mes. No pierdas la oportunidad de aprovechar esta oferta exclusiva y dale a tu evento el toque especial que se merece.
                </Text>
              </View>
            </View>
            <View style={styles.smallBox}>
              <Text style={styles.smallBoxTitle}>¡Únete a rentify y haz crecer tu negocio!</Text>
              <Text style={styles.smallBoxDescription}>¿Eres un emprendedor o dueño de negocio en el mundo de los eventos? ¡Esta es tu oportunidad de expandirte!</Text>
              <TouchableOpacity style={styles.moreInfoButton} onPress={() => {}}>
                <Text style={styles.buttonText}>Más información</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.semana}>
        <View style={styles.overlay}>
          <Text style={styles.semanaTitle}>Productos de la semana</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={globos} style={styles.productImage} />
            <Image source={globos} style={styles.productImage} />
            <Image source={globos} style={styles.productImage} />
            <Image source={globos} style={styles.productImage} />
            <Image source={globos} style={styles.productImage} />
          </ScrollView>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.leftBox}>
          <Text style={styles.categoryTitle}>Ropa</Text>
          <Image source={vestido} style={styles.productImage} />
          <Image source={vestido} style={styles.productImage} />
          <Image source={vestido} style={styles.productImage} />
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.categoryTitle}>Mobiliario</Text>
          <Image source={silla} style={styles.productImage} />
          <Image source={silla} style={styles.productImage} />
          <Image source={silla} style={styles.productImage} />
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.leftBox}>
          <Text style={styles.categoryTitle}>Artículos Electrónicos</Text>
          <Image source={bocinas} style={styles.productImage} />
          <Image source={bocinas} style={styles.productImage} />
          <Image source={bocinas} style={styles.productImage} />
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.categoryTitle}>Servicios</Text>
          <Image source={catering} style={styles.productImage} />
          <Image source={catering} style={styles.productImage} />
          <Image source={catering} style={styles.productImage} />
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Anúnciate con nosotros</Text>
          <View style={styles.infoStep}>
            <Text style={styles.stepText}>01.</Text>
            <View style={{ flex: 1 }}>
              <Text><Text style={styles.strongText}>Ponte en contacto con nosotros</Text></Text>
              <Text>Llena nuestro formulario de bienes raíces o escríbenos por Whatsapp y cuéntanos un poco acerca de tus necesidades.</Text>
            </View>
          </View>
          <View style={styles.infoStep}>
            <Text style={styles.stepText}>02.</Text>
            <View style={{ flex: 1 }}>
              <Text><Text style={styles.strongText}>Te asignamos un agente</Text></Text>
              <Text>Uno de nuestros expertos se pondrá en contacto contigo para pedirte toda la información e imágenes necesarias.</Text>
            </View>
          </View>
          <View style={styles.infoStep}>
            <Text style={styles.stepText}>03.</Text>
            <View style={{ flex: 1 }}>
              <Text><Text style={styles.strongText}>Nosotros nos encargamos del resto</Text></Text>
              <Text>Publicaremos tus artículos y encontraremos al cliente perfecto para ti sin que tengas que mover un solo dedo.</Text>
            </View>
          </View>
        </View>
        <View style={styles.rentalForm}>
          <Text style={styles.formTitle}>Formulario de Alquiler</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de la empresa"
            value={formData.companyName}
            onChangeText={(text) => handleChange('companyName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Tipo de negocio"
            value={formData.businessType}
            onChangeText={(text) => handleChange('businessType', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={formData.phone}
            onChangeText={(text) => handleChange('phone', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Ubicación"
            value={formData.location}
            onChangeText={(text) => handleChange('location', text)}
          />
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Descripción del negocio"
            multiline
            value={formData.businessDescription}
            onChangeText={(text) => handleChange('businessDescription', text)}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  banner: {
    marginBottom: 20,
  },
  overlay: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  bigBox: {
    flex: 1,
    marginRight: 10,
  },
  discountText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  discountContainer: {
    alignItems: 'center',
  },
  discountTextValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  discountTextLabel: {
    fontSize: 16,
    color: '#FF6347',
  },
  infoText: {
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  smallBox: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  smallBoxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  smallBoxDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  moreInfoButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  semana: {
    marginBottom: 20,
  },
  semanaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  leftBox: {
    flex: 1,
    marginRight: 10,
  },
  rightBox: {
    flex: 1,
    marginLeft: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formContainer: {
    marginTop: 20,
  },
  infoSection: {
    marginBottom: 20,
  },
  infoStep: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  stepText: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
  },
  strongText: {
    fontWeight: 'bold',
  },
  rentalForm: {},
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default Home;
