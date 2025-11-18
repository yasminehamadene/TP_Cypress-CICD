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
            steps {
                sh 'npm install'
                //sh 'npm cache clear --force'
                //sh 'npx cypress cache clear'
                
            }
        }

        stage('Run tests') {
            steps {
                sh 'batchs/e2e_test.sh'
            }
        }
    }
}

