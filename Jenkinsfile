pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "npm install --prefix client"
                sh "npm run build --prefix client"
            }
        }
        stage("Deploy") {
            environment {
                RAILWAY_TOKEN = credentials('RAILWAY_TOKEN')
            }
            steps {
                sh "npm install -g @railway/cli"
                sh ("RAILWAY_TOKEN=$RAILWAY_TOKEN railway up")
            }
        }
    }
}
