pipeline {
   agent {
    
        docker {
            // CORRECTION: Retirer le 'c' supplémentaire
            image 'cypress/base:22.3.0' 
           args '--entrypoint ""'
        }
    }
    

    stages {
        stage('Install dependencies') {
          steps{
            sh 'CYPRESS_INSTALL_BINARY=0 npm install'
    }
        }

        stage('Run tests') {
            steps {
                sh 'batchs/e2e_test.sh'
            }
        }
    }
}

