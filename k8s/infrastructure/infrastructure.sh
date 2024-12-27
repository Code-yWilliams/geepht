#!/bin/bash

# Install nginx ingress controller helm chart repo
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

# Install cert-manager
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.2/cert-manager.yaml

# Wait for cert-manager to be ready
kubectl wait --for=condition=ready pod -l app.kubernetes.io/instance=cert-manager -n cert-manager --timeout=120s

# Install ingress-nginx
helm install ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx \
  --create-namespace \
  --set controller.service.type=LoadBalancer \
  --set controller.service.ports.http=80 \
  --set controller.service.ports.https=443 \
  --version 4.11.3

# Wait for ingress-nginx to get an IP
echo "Waiting for LoadBalancer IP..."
while [ -z "$(kubectl get svc -n ingress-nginx ingress-nginx-controller -o jsonpath='{.status.loadBalancer.ingress[0].ip}')" ]; do
  sleep 5
done

# Display the LoadBalancer IP
echo "LoadBalancer IP: $(kubectl get svc -n ingress-nginx ingress-nginx-controller -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
echo "Update DNS A record to point to this IP"