pipeline {
    agent {
        docker {
            image 'cypress/included:13.6.6'
            args '--user=root --entrypoint='
        }
    }

    environment {
        CYPRESS_INSTALL_BINARY = "0"   // Empêche le téléchargement du binaire Cypress
    }

    stages {

        stage('Verify dependencies') {
            steps {
                sh 'node -v && npm -v'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npx cypress run'
                // ou si tu veux utiliser ton script:
                // sh './cypress/e2e/batchs/login.sh'
            }
        }
    }
}