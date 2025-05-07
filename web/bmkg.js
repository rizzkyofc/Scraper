const fetch = require('node-fetch');

async function getBmkg() {
  try {
    const response = await fetch(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`);
    const data = await response.json();
    const i = data.Infogempa.gempa; 

    const result = {
      tanggal: i.Tanggal,
      jam: i.Jam,
      magnitudo: i.Magnitude,
      kedalaman: i.Kedalaman,
      wilayah: i.Wilayah,
      potensi: i.Potensi,
      dirasakan: i.Dirasakan || null,
      koordinat: i.Coordinates,
      lintang: i.Lintang,
      bujur: i.Bujur,
      shakemap: `https://data.bmkg.go.id/DataMKG/TEWS/${i.Shakemap}`,
      datetime: i.DateTime
    };

    console.log(result);
  } catch (error) {
    console.error('Gagal ambil data BMKG:', error.message);
  }
}

getBmkg();
