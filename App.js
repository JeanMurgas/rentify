// App.jsx

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Catalog from './pages/Catalog';
import Ofertas from './pages/Ofertas';
import FAQ from './pages/FAQ';
import Ropa from './pages/Ropa';
import EquiposElectronicos from './pages/Electronicos';
import Servicios from './pages/Servicios';
import Mobiliario from './pages/Mobiliario';
import UsuarioProfile from './pages/UsuarioProfile';
import Home from './pages/Home';
import FAQ_Resuelto from './pages/FAQ_Resuelto';
import Favoritos from './pages/Favoritos';

function App() {
  // Configurar la navegación para web
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={<Catalog />}>
              <Route path="ropa" element={<Ropa />} />
              <Route path="equipos-electronicos" element={<EquiposElectronicos />} />
              <Route path="servicios" element={<Servicios />} />
              <Route path="mobiliario" element={<Mobiliario />} />
            </Route>
            <Route path="perfil" element={<UsuarioProfile />} />
            <Route path="ofertas" element={<Ofertas />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="faq-resuelto" element={<FAQ_Resuelto />} />
            <Route path="favoritos" element={<Favoritos />} />
          </Routes>
          <Aside></Aside>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
