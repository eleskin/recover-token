import {useEffect, useState} from 'react';
import {Document, Page} from 'react-pdf';

import styles from '../Views.module.css';
// @ts-ignore
import pdf from './white_paper.pdf';

import Social from '../../components/Social/Social';
import Title from '../../components/Content/Title/Title';
import background from '../Migration/img/Main_back.png';

const Paper = () => {
  const [numPages, setNumPages] = useState(null);
  const [widthPDF, setWidthPDF] = useState(1920);

  const onDocumentLoadSuccess = ({ numPages }: {numPages: any}) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    setWidthPDF(window.innerWidth);
  }, []);

  window.addEventListener('resize', () => {
    setWidthPDF(window.innerWidth);
  });

  return (
    <div className={styles.View} style={{backgroundImage: `url(${background})`}}>
      <h2 className={styles.View__title}>White paper</h2>
      <div className={styles.View__content}>
        <Title value="RecoverToken White Paper"/>
        <div className={styles.View__container}>
          <Document
            file={pdf}
            options={{ workerSrc: `/pdf.worker.js` }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} width={widthPDF} />
            ))}
          </Document>
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default Paper;
