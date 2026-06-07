pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Clonando repositório...'
                checkout scm
            }
        }

        stage('Install') {
            steps {
                echo 'Instalando dependências...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Executando testes...'
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Executando build...'
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Pipeline concluída com sucesso!'
        }
        failure {
            echo 'Pipeline falhou. Verifique os logs.'
        }
    }
}
