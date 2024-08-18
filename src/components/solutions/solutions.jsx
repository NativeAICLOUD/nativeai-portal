import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/navbar/Navbar'; // Adjust the path to your Navbar component
import Footer from '../../components/footer/Footer'; // Adjust the path to your Footer component
import classes from './solutions.module.css'; // CSS Module for styling

const SolutionsPage = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.frameContainer}>
          <Image
            src="/Solutions.png"
            alt="Background Frame"
            width={759}
            height={574}
            className={classes.frame}
          />
          <div className={classes.content}>
            <h1 className={classes.title}>
              The best cloud <span>Solutions</span> for your organization
            </h1>
            <p className={classes.description}>
              Regardless of your current infrastructure, we empower you to get the most out of your cloud experience. Find our top 3 solutions below and let us help you along your cloud journey.
            </p>
            <div className={classes.icons}>
            <div className={classes.partnerContainer}>
              <Image src="/MSP-Azure.png" alt="Microsoft Solutions Partner" width={762} height={95}
                    className={classes.partner} />
            </div>
            </div>
            <div className={classes.services}>
              <div className={classes.service}>
                <Image src="/Isolation_1.png" alt="Going to Azure" width={160} height={110} />
                <div className={classes.serviceText}>
                  <h3>Going to Azure</h3>
                  <p>
                    Once you've decided to start working with Azure, the cloud migration process begins. Several complex decisions play a role in this, so it makes sense to work according to a carefully designed migration strategy.
                  </p>
                  <Link href="#"><button className={classes.azureButton}>Going to Azure</button></Link>
                </div>
              </div>
              <div className={classes.service}>
                <Image src="/Isolation_2.png" alt="Accelerate with Azure" width={190} height={130} />
                <div className={classes.serviceText}>
                  <h3>Accelerate with Azure</h3>
                  <p>
                    Improving your application and infrastructure environment is a continuous process. The first step to achieving this is already done when you have chosen the public cloud. The next step is moving to a cloud-native application.
                  </p>
                  <Link href="#"><button className={classes.azureButton}>Accelerate with Azure</button></Link>
                </div>
              </div>
              <div className={classes.service}>
                <Image src="/Isolation_3.png" alt="Managed Services" width={142} height={131} />
                <div className={classes.serviceText}>
                  <h3>Managed Services</h3>
                  <p>
                    Besides renewing or recoding the application, making your application more cloud-native, or helping you kickstart your application on the public cloud, we have extensive support packages available if you would like us to manage the application as well.
                  </p>
                  <Link href="#"><button className={classes.azureButton}>Managed Services</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
