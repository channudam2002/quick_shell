pipeline {
    agent { label 'web' }
    stages {
        stage('Updating Resources') {
            steps {
                sh 'git pull origin master'
            }
        }

        stage('Building the Image'){
            steps {
                sh """
                    docker build . -t frontend:latest 
                """
            }
        }

        stage('Deleting Running Container'){
            steps {
                sh """
                    docker rm -f frontend
                """
            }
        }

        stage('Upping the Container'){
            steps {
                sh """
                    docker run -d -p 8080:8080 --name frontend frontend:latest
                """
            }
        }

        stage("Purging Cloudflare Cache") {
            steps {
                sh """
                    curl -X POST "https://api.cloudflare.com/client/v4/zones/b2b073a7119d977265fa2047f5966b55/purge_cache" \
                    -H "Authorization: Bearer LH20n4mNGlROoBYVcMe39eSfCKKaILiNg4MdYmaY" \
                    -H "Content-Type: application/json" \
                    --data '{"files":["https://shellify.systems"]}'
                    """
            }
        }
    }
}