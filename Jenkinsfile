pipeline {
    agent {
        docker {
            //image 'cypress/browsers:node-24.11.1-chrome-142.0.7444.162-1-ff-145.0-edge-142.0.3595.65-1'
            image 'ccypress/browsers:node-20.10.0'
            args '--entrypoint ""'
        }
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'batchs/e2e_test.sh'
            }
        }
    }
}

