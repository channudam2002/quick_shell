pipeline {
    agent { label 'web' }
    stages {
        stage('Test') {
            steps {
                sh 'ls -a'
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