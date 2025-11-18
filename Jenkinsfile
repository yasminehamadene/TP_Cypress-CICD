pipeline {
   agent {
    environment {
        // AJOUTER CECI si vous êtes derrière un proxy
        http_proxy = 'http://USER:PASSWORD@HOST:PORT'
        https_proxy = 'http://USER:PASSWORD@HOST:PORT'
    }
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

