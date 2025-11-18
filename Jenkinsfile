pipeline {
   agent {
    
        docker {
            // CORRECTION: Retirer le 'c' supplémentaire
            image 'cypress/base:22.3.0' 
           args '--entrypoint ""'
        }
    }
    environment {
        // AJOUTER CES VARIABLES si Jenkins est derrière un proxy
        // Remplacez les valeurs par vos paramètres réels (sans guillemets s'il n'y a pas de caractères spéciaux)
        http_proxy = 'http://proxy.votre-domaine.com:8080'
        https_proxy = 'http://proxy.votre-domaine.com:8080'
        
        // Exemple d'autre variable :
        NODE_ENV = 'production'
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

