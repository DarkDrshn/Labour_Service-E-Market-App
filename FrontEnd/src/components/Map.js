  import React, { useEffect, useState } from "react";
  import axios from "axios";

  const MapComponent = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [map,setMap] = useState(null)

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }, []);

    useEffect(() => {
      if (userLocation) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCIKMUxLxX9ILTXdf5-mWcNWpAck1Z0MbA&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = initMap; 
        document.body.appendChild(script);
      }
    }, [userLocation]);

    const fetchLaborerData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/labour/getlabour"
        );
        if (!response.data || Object.keys(response.data).length === 0) {
          throw new Error("Invalid laborer data format");
        }
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching laborer data:", error);
        return [];
      }
    };


    const initMap = () => {
        // const geocoder = new window.google.maps.Geocoder();
        const mapInstance = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: userLocation.latitude, lng: userLocation.longitude },
        zoom: 14,
      });
      setMap(mapInstance)
      new window.google.maps.Marker({
        position: { lat: userLocation.latitude, lng: userLocation.longitude },
        map:mapInstance,
        title: "Your Location",
      }); 
        // Fetch laborer data and add markers for nearby laborers
        fetchLaborerData()
        .then((laborerResponse) => {
          console.log("Laborer data:", laborerResponse);
          return Promise.all(
            laborerResponse.map((laborer) =>
              geocodeCity(laborer.location).then((laborerCoordinates) => ({
                laborer,
                laborerCoordinates,
              }))
            )
          );
        })
        .then((laborersWithCoordinates) => {
          console.log("Laborers with coordinates:", laborersWithCoordinates);
          return filterNearbyLaborers(
            laborersWithCoordinates.map((item) => item.laborer),
            userLocation
          );
        })
        .then((nearbyLaborers) => {
          nearbyLaborers.forEach(({ laborer, laborerCoordinates }) => {
            console.log(laborerCoordinates);
            if (laborerCoordinates) {
              const icon = {
                url: "https://w7.pngwing.com/pngs/567/857/png-transparent-red-and-gray-lever-marker-pen-computer-icons-location-place-tag-s-angle-sphere-map-thumbnail.png",
                scaledSize: new window.google.maps.Size(32, 32),
              };
              const marker = new window.google.maps.Marker({
                position: laborerCoordinates,
                map: mapInstance,
                title: `${laborer.firstName} ${laborer.lastName}`,
                icon: icon,
              });
              const infoWindowContent = `<div><h3>${laborer.firstName} ${laborer.lastName}</h3><p>Age: ${laborer.age}</p><p>Phone: ${laborer.phone}</p></div>`;
              const infoWindow = new window.google.maps.InfoWindow({
                content: infoWindowContent,
              });
              marker.addListener("click", () => {
                infoWindow.open(mapInstance, marker);
              });
            }
            if (!laborerCoordinates) console.log("not available");
          });
        })
        .catch((error) => {
          console.error("Error fetching or processing laborer data:", error);
        });
      } 
      
    const geocodeCity = async (cityName) => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            cityName
          )}&key=AIzaSyCIKMUxLxX9ILTXdf5-mWcNWpAck1Z0MbA`
        );
        if (
          response.data.results &&
          response.data.results.length > 0 &&
          response.data.results[0].geometry &&
          response.data.results[0].geometry.location
        ) {
          const location = response.data.results[0].geometry.location;
          return { lat: location.lat, lng: location.lng };
        }
      } catch (error) {
        throw new Error("Error geocoding city:", error);
      }
      return null;
    };

    const calculateDistance = (coord1, coord2) => {
      // Haversine formula for calculating distance between coordinates
      const R = 6371; // Radius of the Earth in kilometers
      const lat1 = deg2rad(coord1.lat);
      const lat2 = deg2rad(coord2.lat);
      const lon1 = deg2rad(coord1.lng);
      const lon2 = deg2rad(coord2.lng);
      const dLat = lat2 - lat1;
      const dLon = lon2 - lon1;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in kilometers
      return distance;
    };

    const deg2rad = (deg) => {
      return deg * (Math.PI / 180);
    };

    const targetCoordinates = { lat: 19.236280, lng: 73.130730 };
    const proximityThreshold = 100;

    const filterNearbyLaborers = async (laborerResponse) => {
      try {
        const nearbyLaborers = [];
        for (const laborer of laborerResponse) {
          const laborerCoordinates = await geocodeCity(laborer.location);
          if (laborerCoordinates) {
            const distance = calculateDistance(laborerCoordinates, targetCoordinates);
            if (distance <= proximityThreshold) {
              nearbyLaborers.push({ laborer, laborerCoordinates });
            }
          }
        }
        console.log("Nearby laborers:", nearbyLaborers);
        return nearbyLaborers;
      } catch (error) {
        console.error("Error filtering nearby laborers:", error);
        return [];
      }
    };


    return <div id="map" style={{ width: "100%", height: "900px" }}></div>;
  };

  export default MapComponent;
