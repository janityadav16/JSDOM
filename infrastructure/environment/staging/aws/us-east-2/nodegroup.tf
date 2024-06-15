"module" = {
  "buildmachine" = {
    "ami_type" = "AL2_x86_64"

    "labels" = ""

    "max_nodes" = 15

    "min_nodes" = 3

    "node_disk_size" = 20

    "node_instance_type" = "t3.medium"

    "spot_instances" = false

    "taints" = ""

    "use_gpu" = false

    "env_name" = "undefined-us-east-2"

    "layer_name" = "undefined-us-east-2"

    "module_name" = "buildmachine"

    "source" = "tqindia/cops/cloud//module/aws_k8s_nodegroup"

    "version" = "0.0.1"
  }
}