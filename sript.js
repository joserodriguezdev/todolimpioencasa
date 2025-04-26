function consultar(producto) {
    const telefono = "5493410000000";
    const mensaje = `Hola! Quiero consultar por el producto: ${producto}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }
  