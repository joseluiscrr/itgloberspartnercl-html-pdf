import React, { useEffect, useState } from "react";
import styles from "./styles.css";

type Props = {
  pdfUrl: string,
  width: number,
  height: number,
};

/**
 * Este componente sirve para visualizar un archivo pdf
 * @param pdfUrl dirreción en donde se encuentra el archivo pdf que queremos visualizar
 * @param width ancho
 * @param height alto
 * @returns documento pdf
 */

/** */
const PdfReader = ({ pdfUrl, width, height }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true));

  return mounted &&
  <div className={`flex justify-center flex-col items-center ${styles.pdf__reader}`}>
    <h1>PDF Reader</h1>
    <object data={pdfUrl} type="application/pdf" width={width} height={height}>
      <iframe title="PDF" src={pdfUrl} width={width} height={height}>
        <p>Este navegador no soporta PDF!</p>
      </iframe>
    </object>
  </div>
};

export default PdfReader;
