pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "npm install --prefix client"
                sh "npm run build --prefix client"
            }
        }
    }
}
