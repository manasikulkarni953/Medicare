import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Guide = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.animate({
       0: { height: 0 },
       1: { height: 100 }, 
    }, 2000); 
  }, []);
    
  return (
  <Animatable.View ref={containerRef} style={{ backgroundColor: 'yellow', height: 0 }}>
  <Text>Guide</Text>
  </Animatable.View>
  );
};

export default Guide;
