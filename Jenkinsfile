pipeline {
   agent {
        docker {
            // CORRECTION: Retirer le 'c' supplémentaire
            image 'cypress/browsers:node-20.10.0' 
            args '--entrypoint ""'
        }
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm cache clear --force'
                sh 'npx cypress cache clear'
                sh 'npm ci'
            }
        }

        stage('Run tests') {
            steps {
                sh 'batchs/e2e_test.sh'
            }
        }
    }
}

