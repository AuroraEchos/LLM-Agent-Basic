# LLM 与 Agent 面试问题总表

> 本文件只收录问题，不提供答案。题目已对项目原有表述进行去重、补全和规范化，并补充常见的大模型面试问题。

## 使用说明

- 每道题使用唯一编号，便于记录掌握程度、关联答案和安排模拟面试。
- 题目只按知识领域和唯一编号组织，不再区分题目来源。
- 复习时可将 `- [ ]` 改为 `- [x]`。
- 同一个知识点在不同岗位可能有不同追问，本表尽量保留“原理、推导、实现、工程权衡”四类角度。

## 题目统计

| 分类 | 题目数 |
|---|---:|
| 项目与简历深挖 | 15 |
| Transformer 与模型架构 | 30 |
| Tokenizer、数据与预训练 | 25 |
| 损失函数与训练优化 | 25 |
| 推理、解码与 KV Cache | 30 |
| 量化、压缩与推理部署 | 25 |
| SFT 与参数高效微调 | 25 |
| RLHF、偏好优化与推理强化学习 | 30 |
| RAG 与知识系统 | 30 |
| Agent 与工具调用 | 50 |
| 评估、安全与可观测性 | 30 |
| MoE、推理模型与前沿方向 | 25 |
| 多模态大模型 | 20 |
| 分布式训练与 AI Infra | 25 |
| 手写代码与算法 | 30 |
| 系统设计与场景题 | 25 |
| **总计** | **440** |

---

## 1. 项目与简历深挖

- [ ] `EXP-001` 请用三分钟介绍一个你最有代表性的 LLM 或 Agent 项目，并说明你的个人贡献。
- [ ] `EXP-002` 这个项目解决了什么业务问题，为什么需要使用大模型而不是传统方案？
- [ ] `EXP-003` 项目的离线指标、在线指标和最终业务收益分别是什么？
- [ ] `EXP-004` 你如何设计项目的基线方案，并证明后续优化确实有效？
- [ ] `EXP-005` 项目中最困难的问题是什么，你如何定位根因并完成验证？
- [ ] `EXP-006` 你做过哪些失败的尝试，失败原因是什么？
- [ ] `EXP-007` 如果重新做一次，你会怎样调整技术路线？
- [ ] `EXP-008` 项目中的数据从哪里来，如何处理质量、版权、隐私和数据泄漏问题？
- [ ] `EXP-009` 如何证明模型提升来自你的方法，而不是数据量、提示词或随机波动？
- [ ] `EXP-010` 你的方案在延迟、吞吐、质量和成本之间做了哪些权衡？
- [ ] `EXP-011` 项目上线前如何进行灰度、回滚和风险控制？
- [ ] `EXP-012` 线上出现模型效果退化时，你会按照什么顺序排查？
- [ ] `EXP-013` 如何监控模型、检索、工具调用和业务链路的版本变化？
- [ ] `EXP-014` 如何设计消融实验，验证系统中每个组件的贡献？
- [ ] `EXP-015` 如果算力、数据或交付时间减半，你会保留和舍弃哪些部分？

## 2. Transformer 与模型架构

- [ ] `ARC-001` 请完整描述原始 Transformer 的 Encoder、Decoder 及其数据流。
- [ ] `ARC-002` Transformer 相比 RNN、LSTM 的主要优势和代价是什么？
- [ ] `ARC-003` 请从矩阵形状出发推导 Scaled Dot-Product Attention 的完整计算过程。
- [ ] `ARC-004` 为什么 Attention 的 logits 要除以 \(\sqrt{d_k}\)？如果不缩放会怎样？
- [ ] `ARC-005` Self-Attention 的时间复杂度、空间复杂度和主要瓶颈分别是什么？
- [ ] `ARC-006` Multi-Head Attention 为什么比单头注意力更有表达能力？
- [ ] `ARC-007` MHA、MQA、GQA 和 MLA 在参数、计算和 KV Cache 上有什么区别？
- [ ] `ARC-008` 如何从零实现 GQA，Query 头与 KV 头如何映射？
- [ ] `ARC-009` Causal Mask 的作用是什么，训练和推理时如何构造？
- [ ] `ARC-010` Padding Mask、Causal Mask 和 Attention Bias 有什么区别，如何正确广播？
- [ ] `ARC-011` RoPE 如何把相对位置信息编码进 Query 和 Key？
- [ ] `ARC-012` 绝对位置编码、相对位置编码、ALiBi 和 RoPE 各有什么优缺点？
- [ ] `ARC-013` RoPE 的频率基底、旋转维度和数值精度会如何影响模型？
- [ ] `ARC-014` NTK-aware Scaling、Position Interpolation 和 YaRN 分别如何扩展上下文？
- [ ] `ARC-015` LayerNorm 与 BatchNorm 的归一化维度、训练行为和适用场景有何不同？
- [ ] `ARC-016` Pre-Norm、Post-Norm 和 Sandwich-Norm 的结构与训练稳定性有何差异？
- [ ] `ARC-017` RMSNorm 与 LayerNorm 有什么区别，为什么现代 LLM 常使用 RMSNorm？
- [ ] `ARC-018` 标准 FFN、GLU、GEGLU 和 SwiGLU 的结构与参数量有何不同？
- [ ] `ARC-019` Transformer 的 FFN 中间维度为什么常取约 \(4d\)，SwiGLU 下为何常改为约 \(8d/3\)？
- [ ] `ARC-020` Encoder-Only、Decoder-Only 和 Encoder-Decoder 模型分别适合哪些任务？
- [ ] `ARC-021` 为什么主流生成式 LLM 多采用 Decoder-Only 架构？这一判断有哪些例外？
- [ ] `ARC-022` 参数共享、Embedding 与 LM Head 权重绑定有什么作用和限制？
- [ ] `ARC-023` Residual Connection 为什么能改善深层网络训练，它与 Pre-Norm 如何共同影响梯度流？
- [ ] `ARC-024` Attention 中为什么通常对 logits 做 Softmax，可以替换成哪些函数？
- [ ] `ARC-025` Cross-Attention 与 Self-Attention 的输入、缓存方式和使用场景有何区别？
- [ ] `ARC-026` 局部注意力、滑动窗口注意力、稀疏注意力和线性注意力分别解决什么问题？
- [ ] `ARC-027` 训练时的 Teacher Forcing 与推理时的自回归生成为什么会产生 Exposure Bias？
- [ ] `ARC-028` 为什么扩大模型宽度、深度、头数会带来不同的性能和训练稳定性影响？
- [ ] `ARC-029` 如何估算一个 Decoder-Only Transformer 的参数量？
- [ ] `ARC-030` 如何估算 Transformer 单次前向、训练一步和生成一个 token 的 FLOPs？

## 3. Tokenizer、数据与预训练

- [ ] `DAT-001` 请描述 BPE 的训练过程和对新文本的编码过程。
- [ ] `DAT-002` BPE、Byte-Level BPE、WordPiece、Unigram 和 SentencePiece 有什么区别？
- [ ] `DAT-003` WordPiece 的合并目标与 BPE 的频次合并有何差异？
- [ ] `DAT-004` Unigram Tokenizer 为什么是自顶向下裁剪，Viterbi 算法在其中做什么？
- [ ] `DAT-005` 中文、多语言文本和代码对 Tokenizer 设计提出了哪些特殊要求？
- [ ] `DAT-006` 词表大小如何影响参数量、序列长度、训练效率和下游效果？
- [ ] `DAT-007` 如何衡量 Tokenizer 的压缩率、字符覆盖率和未知词问题？
- [ ] `DAT-008` Byte Fallback 的作用是什么，它如何避免 OOV？
- [ ] `DAT-009` 特殊 token 应如何设计，新增 token 后为什么需要调整 Embedding？
- [ ] `DAT-010` Tokenizer 的 Normalization 和 Pre-tokenization 可能引入哪些信息损失？
- [ ] `DAT-011` 如何比较两个 Tokenizer 对中文、英文、代码和数学公式的效率？
- [ ] `DAT-012` 继续预训练时应复用原词表还是扩展词表，分别有什么代价？
- [ ] `DAT-013` 预训练数据清洗通常包括哪些步骤，顺序为什么重要？
- [ ] `DAT-014` 文档级、段落级和近似去重如何实现，各自会漏掉什么？
- [ ] `DAT-015` 如何检测并减少 Benchmark Contamination 和训练测试集泄漏？
- [ ] `DAT-016` 预训练数据的质量、数量和多样性之间如何权衡？
- [ ] `DAT-017` 不同领域和语言的数据混合比例如何确定？
- [ ] `DAT-018` Curriculum Learning 在大模型预训练中如何应用？
- [ ] `DAT-019` Packing、Padding 和 Sequence Length Warmup 如何影响训练效率？
- [ ] `DAT-020` 数据采样中的 Upsampling、Temperature Sampling 和 Reweighting 有何区别？
- [ ] `DAT-021` Scaling Law 描述了什么，Chinchilla Scaling 对模型与数据配比有何启示？
- [ ] `DAT-022` Continued Pretraining、Domain-Adaptive Pretraining 和 SFT 的目标有什么区别？
- [ ] `DAT-023` 合成数据有哪些生成、过滤和防止模型坍缩的方法？
- [ ] `DAT-024` 如何构建高质量数学、代码或工具调用预训练数据？
- [ ] `DAT-025` 数据版权、个人信息和遗忘请求会如何影响训练数据管线？

## 4. 损失函数与训练优化

- [ ] `OPT-001` Decoder-Only LLM 的 Next-Token Prediction 损失如何计算？
- [ ] `OPT-002` 交叉熵、信息熵、负对数似然和 KL 散度之间是什么关系？
- [ ] `OPT-003` Perplexity 的定义是什么，它为什么不能完整反映生成质量？
- [ ] `OPT-004` Label Smoothing 对语言模型训练有何影响，为什么 LLM 预训练中并不总使用？
- [ ] `OPT-005` 如何在多轮对话和 Packing 数据中正确构造 Loss Mask？
- [ ] `OPT-006` SGD、Adam、AdamW 和 Adafactor 的更新规则与适用场景有何不同？
- [ ] `OPT-007` AdamW 为什么要将 Weight Decay 与自适应梯度更新解耦？
- [ ] `OPT-008` Adam 的 \(\beta_1\)、\(\beta_2\)、epsilon 和学习率分别控制什么？
- [ ] `OPT-009` Warmup 为什么有助于大模型稳定训练，步数应如何选择？
- [ ] `OPT-010` Cosine Decay、Linear Decay 和 WSD 学习率调度各适合什么训练计划？
- [ ] `OPT-011` 梯度消失和梯度爆炸的成因及排查方法是什么？
- [ ] `OPT-012` Gradient Clipping 应按值还是按范数进行，应该在训练流程的哪个位置执行？
- [ ] `OPT-013` FP16、BF16、FP8 和 FP32 在指数范围、有效精度和硬件支持上有何差异？
- [ ] `OPT-014` 混合精度训练中的 Master Weight、Loss Scaling 和溢出检测如何工作？
- [ ] `OPT-015` 梯度累积与增大全局 Batch Size 是否等价，哪些因素会破坏等价性？
- [ ] `OPT-016` Batch Size、学习率和训练 token 数之间通常如何联动调整？
- [ ] `OPT-017` 如何判断一次训练出现了 Loss Spike，常见根因有哪些？
- [ ] `OPT-018` 参数初始化、残差缩放和归一化如何影响超深 Transformer 的稳定性？
- [ ] `OPT-019` Activation Checkpointing 如何节省显存，代价是什么？
- [ ] `OPT-020` EMA、Weight Averaging 和 Checkpoint Averaging 是否适用于 LLM？
- [ ] `OPT-021` 如何估算训练一个模型所需的显存、计算量、训练时间和成本？
- [ ] `OPT-022` 训练吞吐中的 MFU、HFU、tokens/s 和 samples/s 分别表示什么？
- [ ] `OPT-023` 如何诊断训练中的 NaN、Inf、梯度异常和通信超时？
- [ ] `OPT-024` Checkpoint 中通常保存哪些状态，断点续训如何保证可复现？
- [ ] `OPT-025` 随机种子、算子确定性和分布式并行会怎样影响实验复现？

## 5. 推理、解码与 KV Cache

- [ ] `INF-001` Prefill 与 Decode 两个阶段的计算特征和性能瓶颈有什么不同？
- [ ] `INF-002` KV Cache 为什么能够降低自回归解码的重复计算？
- [ ] `INF-003` 如何根据层数、KV 头数、Head Dim、序列长度、Batch Size 和数据类型计算 KV Cache 显存？
- [ ] `INF-004` MHA、MQA、GQA 和 MLA 的 KV Cache 大小如何比较？
- [ ] `INF-005` KV Cache 量化、滑动窗口和 Token Eviction 各有什么质量与效率代价？
- [ ] `INF-006` Prefix Cache、Prompt Cache 和 KV Cache 是什么关系？
- [ ] `INF-007` 多轮对话复用 KV Cache 时如何处理模板变化、前缀不匹配和缓存失效？
- [ ] `INF-008` FlashAttention 为什么是 IO-Aware 的，它如何避免物化完整注意力矩阵？
- [ ] `INF-009` Online Softmax 如何在分块计算中保持数值稳定和精确结果？
- [ ] `INF-010` FlashAttention 1、2、3 的优化重点分别是什么？
- [ ] `INF-011` PagedAttention 如何利用分页思想管理不定长请求的 KV Cache？
- [ ] `INF-012` Continuous Batching 与静态 Batching 的调度差异是什么？
- [ ] `INF-013` Iteration-Level Scheduling、Chunked Prefill 和 Decode-First 各解决什么问题？
- [ ] `INF-014` Greedy Search、Beam Search 和 Sampling 的目标与适用任务有何不同？
- [ ] `INF-015` Temperature 如何改变概率分布，设为 0 在工程实现中通常表示什么？
- [ ] `INF-016` Top-K、Top-P、Min-P 和 Typical Sampling 有什么区别？
- [ ] `INF-017` Repetition Penalty、Frequency Penalty 和 Presence Penalty 如何影响生成？
- [ ] `INF-018` Beam Search 的长度惩罚、提前停止和 Beam Collapse 应如何处理？
- [ ] `INF-019` Logits Processor、Logits Warper 和受约束解码分别在什么阶段工作？
- [ ] `INF-020` 如何使用有限状态机或 Grammar 保证 JSON、SQL 等结构化输出合法？
- [ ] `INF-021` Speculative Decoding 的 Draft、Verification、Acceptance 和 Residual Sampling 流程是什么？
- [ ] `INF-022` 为什么正确实现的 Speculative Decoding 能保持与目标模型相同的输出分布？
- [ ] `INF-023` Draft 模型大小、候选长度和接受率如何共同决定投机解码收益？
- [ ] `INF-024` Medusa、EAGLE 等多 token 推测方法与双模型投机解码有什么区别？
- [ ] `INF-025` Multi-Token Prediction 如何同时用于训练增强和推理解码？
- [ ] `INF-026` TTFT、TPOT、ITL、吞吐量和端到端延迟分别如何定义？
- [ ] `INF-027` 请求长度分布、并发数和显存容量如何影响服务吞吐？
- [ ] `INF-028` 如何分析推理过程是 Compute-Bound 还是 Memory-Bound？
- [ ] `INF-029` Roofline Model 如何用于解释 Prefill 和 Decode 的性能差异？
- [ ] `INF-030` 长上下文推理中 Attention、KV Cache、带宽和调度分别会遇到什么瓶颈？

## 6. 量化、压缩与推理部署

- [ ] `DEP-001` 模型量化的基本目标是什么，Weight、Activation 和 KV Cache 量化有何区别？
- [ ] `DEP-002` PTQ 与 QAT 的流程、成本和效果有何差异？
- [ ] `DEP-003` 对称量化与非对称量化、Per-Tensor 与 Per-Channel 量化如何选择？
- [ ] `DEP-004` Scale、Zero Point、Group Size 和 Calibration Data 分别如何影响量化误差？
- [ ] `DEP-005` GPTQ 的逐列量化与二阶信息如何降低误差？
- [ ] `DEP-006` AWQ 为什么根据激活识别显著权重通道？
- [ ] `DEP-007` GPTQ、AWQ、SmoothQuant 和 bitsandbytes 各适合什么场景？
- [ ] `DEP-008` SmoothQuant 如何在权重与激活之间迁移量化难度？
- [ ] `DEP-009` GGUF 是量化算法还是模型文件格式，它与 llama.cpp 是什么关系？
- [ ] `DEP-010` NF4、INT4、FP4 和 GPTQ 4-bit 在表示方式上有何区别？
- [ ] `DEP-011` 为什么权重量化到 4-bit 不一定带来理论上的 4 倍推理加速？
- [ ] `DEP-012` INT4 量化后精度明显下降时，可以从哪些方面恢复？
- [ ] `DEP-013` 模型蒸馏与模型量化解决的问题有何不同，能否组合使用？
- [ ] `DEP-014` Logits Distillation、Feature Distillation 和 Sequence-Level Distillation 有何区别？
- [ ] `DEP-015` 结构化剪枝、非结构化剪枝和稀疏化为什么不一定带来实际加速？
- [ ] `DEP-016` vLLM、TensorRT-LLM、SGLang、llama.cpp 和 DeepSpeed-Inference 如何选型？
- [ ] `DEP-017` Tensor Parallelism 与 Pipeline Parallelism 在推理中的通信模式有何不同？
- [ ] `DEP-018` Data Parallel、Expert Parallel 和 Context Parallel 如何用于大模型推理？
- [ ] `DEP-019` 模型服务中的 Replication、Sharding 和 Disaggregation 分别解决什么问题？
- [ ] `DEP-020` Prefill-Decode Disaggregation 的收益、成本和调度难点是什么？
- [ ] `DEP-021` 如何针对吞吐优先、延迟优先和成本优先三种目标选择部署方案？
- [ ] `DEP-022` GPU 利用率很低但显存占满时，应如何分析和优化？
- [ ] `DEP-023` CUDA Graph、Kernel Fusion 和算子编译如何降低推理开销？
- [ ] `DEP-024` 多模型、多 LoRA 和多租户共用 GPU 时如何隔离资源与保证公平性？
- [ ] `DEP-025` 如何进行推理服务容量规划、压测和成本核算？

## 7. SFT 与参数高效微调

- [ ] `FT-001` 预训练、Continued Pretraining、SFT 和偏好对齐的训练目标分别是什么？
- [ ] `FT-002` 指令微调数据通常包含哪些字段，哪些 token 应计算损失？
- [ ] `FT-003` 单轮与多轮对话数据应如何拼接和构造 Loss Mask？
- [ ] `FT-004` Chat Template 不一致会对训练和推理产生什么影响？
- [ ] `FT-005` 指令微调中数据质量、数量、多样性和难度如何权衡？
- [ ] `FT-006` 人工标注、模型蒸馏、开源数据和 Self-Instruct 各有什么风险？
- [ ] `FT-007` 全量微调、LoRA 和 QLoRA 应如何选择？
- [ ] `FT-008` LoRA 的低秩假设是什么，前向计算与参数量如何推导？
- [ ] `FT-009` LoRA 的 Rank、Alpha、Dropout 和 Target Modules 如何选择？
- [ ] `FT-010` LoRA 应作用于 Q、K、V、O 还是 FFN，如何通过实验判断？
- [ ] `FT-011` LoRA 的初始化为什么通常让一个低秩矩阵为零？
- [ ] `FT-012` LoRA 合并进基础权重后是否完全没有推理开销，量化模型上有什么例外？
- [ ] `FT-013` QLoRA 的 NF4、Double Quantization 和 Paged Optimizer 分别做什么？
- [ ] `FT-014` QLoRA 为什么不是常规意义上的 QAT？
- [ ] `FT-015` Adapter、Prefix Tuning、Prompt Tuning 和 LoRA 有何差异？
- [ ] `FT-016` AdaLoRA、DoRA 和其他 LoRA 变体试图解决什么问题？
- [ ] `FT-017` SFT 中的灾难性遗忘、过拟合和格式退化如何发现并缓解？
- [ ] `FT-018` 如何构建 Train、Validation、Test 集并避免指令模板或语义泄漏？
- [ ] `FT-019` 如何选择 SFT 的学习率、Epoch、Batch Size、序列长度和保存策略？
- [ ] `FT-020` Function Calling、代码和长思考数据应如何设计 Loss Mask 与样本权重？
- [ ] `FT-021` 多任务 SFT 中不同数据源如何混合，怎样避免某类任务主导训练？
- [ ] `FT-022` 多个 LoRA Adapter 如何组合、路由、热切换和版本管理？
- [ ] `FT-023` 如何判断微调是在注入知识、改变风格，还是学习新的任务能力？
- [ ] `FT-024` 微调后通用能力下降时，应如何定位数据和训练配置问题？
- [ ] `FT-025` 如何建立微调实验的可复现流程和效果归因体系？

## 8. RLHF、偏好优化与推理强化学习

- [ ] `ALN-001` 经典 RLHF 的 SFT、Reward Model 和 Policy Optimization 三个阶段如何衔接？
- [ ] `ALN-002` Pairwise Preference Data 如何收集，Reward Model 的 Bradley-Terry 损失如何推导？
- [ ] `ALN-003` PPO 用于 LLM 对齐时 Actor、Critic、Reward Model 和 Reference Model 分别做什么？
- [ ] `ALN-004` PPO 的 Probability Ratio、Clipped Objective 和 Advantage 分别是什么？
- [ ] `ALN-005` GAE 如何估计优势，\(\gamma\) 和 \(\lambda\) 有什么作用？
- [ ] `ALN-006` PPO 中的 KL 惩罚为什么必要，固定 KL 与自适应 KL 如何选择？
- [ ] `ALN-007` LLM 的序列级奖励如何分配到 token 级训练目标？
- [ ] `ALN-008` Reward Hacking、Length Hacking 和 Format Hacking 如何发生？
- [ ] `ALN-009` PPO 训练不稳定时，应检查哪些数据、奖励、采样和优化指标？
- [ ] `ALN-010` DPO 如何从 KL 正则化的 RL 目标推导出直接偏好损失？
- [ ] `ALN-011` DPO 中 Reference Model 和 \(\beta\) 分别起什么作用？
- [ ] `ALN-012` DPO 与 PPO 在数据、计算成本、在线探索和稳定性上有何差异？
- [ ] `ALN-013` DPO 为什么可能出现过拟合偏好、概率质量下降或长度偏置？
- [ ] `ALN-014` IPO、KTO、ORPO、SimPO 和 CPO 分别对 DPO 做了什么改动？
- [ ] `ALN-015` GRPO 为什么不训练 Critic，它如何用组内奖励构造相对优势？
- [ ] `ALN-016` GRPO 的组大小如何影响方差、采样成本和可学习信号？
- [ ] `ALN-017` GRPO 与 PPO、REINFORCE 的目标和资源占用有何差异？
- [ ] `ALN-018` GRPO 中所有候选奖励相同或方差接近零时如何处理？
- [ ] `ALN-019` Outcome Reward 与 Process Reward 的监督粒度和适用任务有何不同？
- [ ] `ALN-020` PRM 如何收集步骤级标注并用于推理过程训练或搜索？
- [ ] `ALN-021` Verifiable Reward 适用于哪些任务，规则奖励有什么局限？
- [ ] `ALN-022` Function Calling 场景的奖励应如何覆盖格式、工具选择、参数和执行结果？
- [ ] `ALN-023` 多目标奖励中正确性、安全性、风格和成本如何标定与组合？
- [ ] `ALN-024` Reward Model 的校准、分布外泛化和不确定性应如何评估？
- [ ] `ALN-025` RLAIF、Constitutional AI 与人工反馈 RLHF 有何差异？
- [ ] `ALN-026` Online RL、Offline Preference Optimization 和 On-Policy Distillation 如何选择？
- [ ] `ALN-027` 推理模型为什么可能通过强化学习获得更长的思考过程？
- [ ] `ALN-028` 如何避免推理强化学习中的 Reward Hacking、无意义长思考和语言混杂？
- [ ] `ALN-029` DAPO 的核心改进分别解决 GRPO 训练中的哪些问题？
- [ ] `ALN-030` 如何设计一套可复现的数学或代码推理强化学习训练管线？

## 9. RAG 与知识系统

- [ ] `RAG-001` RAG 的离线索引和在线查询全链路分别包含哪些阶段？
- [ ] `RAG-002` RAG 与微调分别适合解决知识更新、风格适配和能力学习中的哪些问题？
- [ ] `RAG-003` PDF、网页、表格和扫描文档的解析与清洗难点分别是什么？
- [ ] `RAG-004` Fixed、Recursive、Semantic 和 Structure-Aware Chunking 如何选择？
- [ ] `RAG-005` Chunk Size 与 Overlap 如何影响召回率、上下文完整性、延迟和成本？
- [ ] `RAG-006` Parent-Child Chunk、Small-to-Big Retrieval 和 Late Chunking 分别解决什么问题？
- [ ] `RAG-007` Embedding 模型应从语言、领域、维度、长度和成本哪些方面选型？
- [ ] `RAG-008` Embedding 模型的训练目标、Pooling 和向量归一化会怎样影响检索？
- [ ] `RAG-009` 向量检索、BM25 和混合检索各自擅长哪些查询？
- [ ] `RAG-010` RRF 如何融合多路排序结果，参数应如何选择？
- [ ] `RAG-011` HNSW、IVF、PQ 和 Flat Index 的精度、内存与速度如何权衡？
- [ ] `RAG-012` Milvus、Weaviate、Chroma、Elasticsearch 和关系型数据库向量扩展如何选型？
- [ ] `RAG-013` HyDE、Multi-Query、Step-Back 和 Query Decomposition 分别适合什么查询？
- [ ] `RAG-014` 如何判断查询改写提升了召回，而不是引入了语义漂移？
- [ ] `RAG-015` Bi-Encoder 检索与 Cross-Encoder Reranking 的差别是什么？
- [ ] `RAG-016` Retrieval Top-K、Rerank Top-N 和最终上下文数量如何调优？
- [ ] `RAG-017` Lost in the Middle、上下文冲突和信息冗余如何缓解？
- [ ] `RAG-018` 如何让答案携带可验证的引用，并检测引用与原文是否一致？
- [ ] `RAG-019` Recall@K、MRR、NDCG、Context Precision 和 Faithfulness 分别评估什么？
- [ ] `RAG-020` 如何使用 RAGAS 或自建评测集评估端到端 RAG？
- [ ] `RAG-021` 没有标准答案时，如何构建 RAG 的评测集与负样本？
- [ ] `RAG-022` 如何区分检索失败、重排失败、上下文构造失败和生成失败？
- [ ] `RAG-023` Agentic RAG 如何决定是否检索、使用什么检索器以及何时停止？
- [ ] `RAG-024` Graph RAG 如何构建图、做社区摘要并处理多跳问题？
- [ ] `RAG-025` Knowledge Graph Retrieval 与普通向量 RAG 应如何组合？
- [ ] `RAG-026` 多租户 RAG 如何实现权限过滤、数据隔离和审计？
- [ ] `RAG-027` 文档新增、更新和删除后，索引如何增量刷新并保持一致性？
- [ ] `RAG-028` RAG 系统如何抵御文档中的 Prompt Injection 与数据投毒？
- [ ] `RAG-029` 如何缓存 Embedding、检索结果和最终回答而不返回过期知识？
- [ ] `RAG-030` 企业级 RAG 上线后应监控哪些质量、延迟、成本和安全指标？

## 10. Agent 与工具调用

- [ ] `AGT-001` LLM Agent 的模型、规划、工具、记忆和执行环境分别承担什么职责？
- [ ] `AGT-002` ReAct 如何交替进行推理与行动，它与 CoT、Act-Only 有何差异？
- [ ] `AGT-003` Plan-and-Execute、ReWOO、Tree of Thoughts 与 ReAct 各适合什么任务？
- [ ] `AGT-004` Agent 应在什么条件下制定计划、重规划或直接执行？
- [ ] `AGT-005` Function Calling 的工具定义、模型决策、执行和结果回传流程是什么？
- [ ] `AGT-006` 如何编写高质量的工具名称、Description 和 JSON Schema？
- [ ] `AGT-007` 多个相似工具导致误选时，应如何优化工具设计和路由？
- [ ] `AGT-008` 工具参数缺失、类型错误或语义冲突时，Agent 应如何澄清与修复？
- [ ] `AGT-009` 串行、并行和依赖图式工具调用分别如何调度？
- [ ] `AGT-010` 工具调用如何实现超时、重试、幂等、熔断和降级？
- [ ] `AGT-011` 如何验证工具输出，避免把错误结果继续传播给后续步骤？
- [ ] `AGT-012` 涉及支付、删除、发信等高风险操作时，如何设计确认和权限边界？
- [ ] `AGT-013` MCP 的 Host、Client、Server 分别是什么，它提供哪些核心能力？
- [ ] `AGT-014` MCP 与模型原生 Function Calling 处于什么层级，二者如何协作？
- [ ] `AGT-015` MCP 的 Tools、Resources 和 Prompts 有什么区别？
- [ ] `AGT-016` MCP 的能力发现、生命周期、传输和错误处理如何工作？
- [ ] `AGT-017` 连接不可信 MCP Server 时有哪些安全风险和隔离措施？
- [ ] `AGT-018` Agent 的工作记忆、短期记忆、长期记忆和外部知识如何划分？
- [ ] `AGT-019` 记忆的写入、检索、更新、合并和遗忘策略应如何设计？
- [ ] `AGT-020` 如何区分用户偏好、事实记忆、情景记忆和任务状态？
- [ ] `AGT-021` Agent 记忆出现冲突、过期或错误时如何纠正？
- [ ] `AGT-022` 如何评估记忆系统的召回质量、时效性和隐私风险？
- [ ] `AGT-023` Leader-Worker、Peer-to-Peer 和层级式多 Agent 架构有何优缺点？
- [ ] `AGT-024` 多 Agent 如何通过投票、辩论、仲裁或置信度解决冲突？
- [ ] `AGT-025` 什么时候多 Agent 优于单 Agent，如何证明收益覆盖了额外成本？
- [ ] `AGT-026` 多 Agent 系统如何共享上下文、避免重复工作并处理部分失败？
- [ ] `AGT-027` Agent 的状态机、事件循环和有向图编排分别适合什么复杂度？
- [ ] `AGT-028` LangChain、LangGraph、AutoGen、CrewAI、Dify 和 Coze 的定位有何不同？
- [ ] `AGT-029` 如何避免 Agent 陷入循环、无限重试或持续无效调用？
- [ ] `AGT-030` Agent 的停止条件、最大步数和预算应如何设计？
- [ ] `AGT-031` Browser、代码执行和文件系统工具分别需要哪些沙箱机制？
- [ ] `AGT-032` Human-in-the-Loop 应插入 Agent 工作流的哪些位置？
- [ ] `AGT-033` 如何记录 Agent 的 Trace，并从 Trace 中定位规划或工具错误？
- [ ] `AGT-034` 如何为 Agent 构建任务成功率、步骤效率、工具正确率和成本评测？
- [ ] `AGT-035` 如何设计一个能够中断、恢复和持久化长任务的 Agent Runtime？


### Agent Harness 与上下文工程

- [ ] `AGT-036` 什么是 Agent Harness，它与基础模型、Agent Framework 和 Agent Runtime 的边界分别是什么？
- [ ] `AGT-037` Agent 的最终效果为什么不仅取决于模型能力，Harness 会通过哪些机制放大或限制模型能力？
- [ ] `AGT-038` 如何设计稳定的 Observation、Action、Tool Result 和 Feedback 协议，使模型与执行环境解耦？
- [ ] `AGT-039` 工具返回内容应如何完成裁剪、结构化、去噪、校验和错误分类后再写入模型上下文？
- [ ] `AGT-040` Context Engineering 与 Prompt Engineering 有什么区别，前者通常覆盖哪些系统组件？
- [ ] `AGT-041` System Prompt、用户目标、任务状态、工具定义、检索内容、记忆和执行反馈应按照什么原则组织进上下文？
- [ ] `AGT-042` 在上下文窗口受限时，如何在任务指令、历史轨迹、工具结果、检索证据和输出预算之间分配 token？
- [ ] `AGT-043` 如何压缩或总结长轨迹，同时避免丢失约束、未完成事项、关键实体和可恢复状态？
- [ ] `AGT-044` Context Rot、Lost in the Middle、指令冲突和历史污染分别如何影响 Agent，应该如何缓解？
- [ ] `AGT-045` Agent 上下文缓存应如何设计命中键、版本绑定、失效条件和隐私隔离？
- [ ] `AGT-046` 为什么任务状态不应只存在于对话文本中，如何建立外部状态存储与 Single Source of Truth？
- [ ] `AGT-047` 如何为系统指令、用户输入、检索文档、网页内容和工具结果建立信任分层，防止间接 Prompt Injection 污染上下文？
- [ ] `AGT-048` 如何从 Agent Trace 构造 SFT、偏好学习或强化学习数据，成功轨迹和失败轨迹分别有什么价值？
- [ ] `AGT-049` 如何观测每一步实际发送给模型的上下文，并定位截断、顺序、模板、状态同步和工具结果注入问题？
- [ ] `AGT-050` 如何在固定基础模型或替换基础模型的条件下，独立评估 Agent Harness 的规划、恢复、工具使用和上下文管理能力？

## 11. 评估、安全与可观测性

- [ ] `EVA-001` LLM 的知识、推理、代码、指令遵循、长文本和对话能力应如何分别评估？
- [ ] `EVA-002` 自动 Benchmark、人工评测、LLM-as-Judge 和竞技场评测有何优缺点？
- [ ] `EVA-003` LLM-as-Judge 的位置、长度、自我偏好和风格偏差如何控制？
- [ ] `EVA-004` Pointwise、Pairwise、Listwise 和 Reference-Based 评测如何选择？
- [ ] `EVA-005` 如何校准 Judge，并测量其与人工标注的一致性？
- [ ] `EVA-006` Pass@k、Exact Match、F1、BLEU、ROUGE 和语义相似度分别适合什么任务？
- [ ] `EVA-007` 如何防止模型针对公开 Benchmark 过拟合或数据污染？
- [ ] `EVA-008` 离线评测提升为什么可能无法转化为线上业务提升？
- [ ] `EVA-009` 如何设计大模型线上 A/B 实验并处理非确定性输出？
- [ ] `EVA-010` 如何对 Prompt、模型、采样参数、检索器和工具版本做回归测试？
- [ ] `EVA-011` 事实性幻觉、忠实度幻觉和指令不遵循如何区分？
- [ ] `EVA-012` RAG、微调、验证器、自洽性和拒答机制分别能缓解哪些幻觉？
- [ ] `EVA-013` 模型置信度为什么不等于生成概率，如何做不确定性估计与校准？
- [ ] `EVA-014` 越狱、Prompt Injection、数据泄漏、有害输出和偏见有什么区别？
- [ ] `EVA-015` 角色扮演、多轮诱导、编码绕过和对抗后缀等越狱方式如何评估？
- [ ] `EVA-016` 输入过滤、模型对齐、工具隔离、输出审核和人工复核如何组成纵深防御？
- [ ] `EVA-017` 直接 Prompt Injection 与间接 Prompt Injection 有何差异？
- [ ] `EVA-018` System Prompt 为什么不能被视为真正的安全边界？
- [ ] `EVA-019` 如何防止工具调用中的权限提升、参数注入和 Confused Deputy 问题？
- [ ] `EVA-020` Red Teaming 的威胁建模、测试集构建、执行和复测流程是什么？
- [ ] `EVA-021` 如何衡量模型在不同人群、语言和文化上的公平性与偏见？
- [ ] `EVA-022` 训练数据记忆与隐私泄漏如何检测，差分隐私有什么代价？
- [ ] `EVA-023` 内容安全分类器的 Precision、Recall 和拒答率如何权衡？
- [ ] `EVA-024` 如何防止安全对齐导致过度拒答，并评估模型的安全有用性平衡？
- [ ] `EVA-025` 大模型应用应记录哪些日志，如何兼顾可观测性与隐私？
- [ ] `EVA-026` 如何监控输入分布漂移、输出质量漂移和成本异常？
- [ ] `EVA-027` Trace、Metric 和 Log 在 LLM 应用可观测性中的分工是什么？
- [ ] `EVA-028` 如何建立线上 Bad Case 收集、聚类、归因和闭环修复流程？
- [ ] `EVA-029` 模型升级时如何制定兼容性、灰度发布和回滚策略？
- [ ] `EVA-030` 如何为生成式 AI 系统建立风险分级和发布门禁？

## 12. MoE、推理模型与前沿方向

- [ ] `HOT-001` MoE 如何通过 Router 为每个 token 选择 Top-K 专家？
- [ ] `HOT-002` MoE 的总参数量、激活参数量和单 token FLOPs 应如何区分？
- [ ] `HOT-003` MoE 的负载不均衡和专家坍缩为什么会发生？
- [ ] `HOT-004` Auxiliary Load-Balancing Loss 如何计算，它可能带来什么副作用？
- [ ] `HOT-005` Auxiliary-Loss-Free Load Balancing 的基本思路是什么？
- [ ] `HOT-006` Expert Parallelism 为什么会产生 All-to-All 通信瓶颈？
- [ ] `HOT-007` Expert Capacity、Token Dropping 和 Dropless MoE 有何区别？
- [ ] `HOT-008` Shared Expert 与 Routed Expert 为什么可以同时使用？
- [ ] `HOT-009` DeepSeekMoE 的细粒度专家划分试图解决什么问题？
- [ ] `HOT-010` MLA 如何压缩 KV 表示，它与 GQA 的精度和部署权衡是什么？
- [ ] `HOT-011` DeepSeek-V3 的 MoE、MLA、FP8 和 Multi-Token Prediction 分别解决什么问题？
- [ ] `HOT-012` DeepSeek-R1 的强化学习训练路线和能力涌现应如何理解？
- [ ] `HOT-013` Test-Time Compute 包含哪些策略，为什么能提升复杂推理能力？
- [ ] `HOT-014` Best-of-N、Self-Consistency、搜索和长思考的收益与成本有何不同？
- [ ] `HOT-015` Test-Time Scaling 的性能上限受模型、验证器和搜索空间哪些因素限制？
- [ ] `HOT-016` 推理模型的可见 Chain-of-Thought 是否等于模型真实的内部推理过程？
- [ ] `HOT-017` 为什么不应把完整 Chain-of-Thought 作为所有应用的默认输出？
- [ ] `HOT-018` 长上下文可以从位置编码、训练数据、注意力机制和系统并行哪些层面扩展？
- [ ] `HOT-019` Context Length、Effective Context Length 和 Needle-in-a-Haystack 成绩有何区别？
- [ ] `HOT-020` Ring Attention、Context Parallel 和序列并行如何支持超长上下文？
- [ ] `HOT-021` State Space Model 与 Transformer 在长序列建模上的差异是什么？
- [ ] `HOT-022` Model Soup、Task Arithmetic、TIES-Merging 和 DARE 等模型合并方法有哪些适用条件？
- [ ] `HOT-023` 小模型的蒸馏、端侧部署和混合云推理有哪些关键挑战？
- [ ] `HOT-024` World Model 的目标是什么，它与语言模型或多模态模型有什么关系？
- [ ] `HOT-025` 合成数据闭环为什么可能导致 Model Collapse，如何缓解？

## 13. 多模态大模型

- [ ] `MM-001` 典型 Vision-Language Model 的 Vision Encoder、Projector 和 LLM 如何连接？
- [ ] `MM-002` CLIP 的对比学习目标是什么，它为什么适合视觉语言对齐？
- [ ] `MM-003` ViT 如何把图像转换成 token，Patch Size 会带来什么影响？
- [ ] `MM-004` Linear Projector、MLP Projector、Q-Former 和 Cross-Attention Connector 有何不同？
- [ ] `MM-005` 多模态预训练、对齐预训练和指令微调分别需要什么数据？
- [ ] `MM-006` 图像分辨率、动态切图和视觉 token 数如何影响效果与成本？
- [ ] `MM-007` AnyRes、Image Tiling 和 Naive Dynamic Resolution 分别解决什么问题？
- [ ] `MM-008` 多图、视频和长文档输入如何组织位置与时间信息？
- [ ] `MM-009` OCR、图表、文档理解和自然图像问答对模型能力要求有何不同？
- [ ] `MM-010` 多模态模型中的视觉幻觉如何定义和评估？
- [ ] `MM-011` 图文对齐数据中的噪声、错配和重复应如何清洗？
- [ ] `MM-012` 多模态模型如何进行 Grounding、Bounding Box 和 Point Prediction？
- [ ] `MM-013` Early Fusion、Late Fusion 与统一 Token 建模有何差异？
- [ ] `MM-014` 图像生成模型中的 Autoregressive、VAE、GAN 和 Diffusion 路线有何区别？
- [ ] `MM-015` Diffusion Model 的前向加噪、反向去噪和训练目标是什么？
- [ ] `MM-016` 文生图系统如何理解 CFG、Sampler、Steps 和 Negative Prompt？
- [ ] `MM-017` 语音多模态模型如何表示音频，并处理流式输入和低延迟输出？
- [ ] `MM-018` 视频模型如何处理帧采样、时序建模和超长 token 序列？
- [ ] `MM-019` 多模态模型的安全风险与纯文本模型相比有哪些新增部分？
- [ ] `MM-020` 如何设计一套覆盖感知、推理、OCR、Grounding 和幻觉的多模态评测？

## 14. 分布式训练与 AI Infra

- [ ] `DIS-001` Data Parallel、Tensor Parallel、Pipeline Parallel、Sequence Parallel 和 Expert Parallel 分别切分什么？
- [ ] `DIS-002` 如何根据模型大小、节点拓扑和序列长度组合多种并行策略？
- [ ] `DIS-003` Tensor Parallel 中 Column Parallel 与 Row Parallel Linear 如何通信？
- [ ] `DIS-004` Pipeline Parallel 为什么会产生 Bubble，如何通过 Micro-Batch 和调度减少？
- [ ] `DIS-005` ZeRO-1、ZeRO-2 和 ZeRO-3 分别切分哪些训练状态？
- [ ] `DIS-006` ZeRO 与 FSDP 的概念和工程实现有何异同？
- [ ] `DIS-007` All-Reduce、Reduce-Scatter、All-Gather 和 All-to-All 分别用于哪些并行方式？
- [ ] `DIS-008` Ring All-Reduce 的通信过程和数据量如何计算？
- [ ] `DIS-009` NVLink、NVSwitch、PCIe、InfiniBand 和 RoCE 如何影响并行策略？
- [ ] `DIS-010` 通信与计算如何重叠，Bucket Size 和异步 Collective 有什么作用？
- [ ] `DIS-011` Sequence Parallel、Context Parallel 和 Ring Attention 有何区别？
- [ ] `DIS-012` 梯度累积如何实现，它与 Pipeline Micro-Batch 是什么关系？
- [ ] `DIS-013` 大模型训练显存应如何拆分为参数、梯度、优化器状态和激活？
- [ ] `DIS-014` Activation Recomputation、CPU Offload 和 NVMe Offload 的收益与瓶颈是什么？
- [ ] `DIS-015` 分布式训练出现 Straggler、Hang 或 NCCL Timeout 时如何排查？
- [ ] `DIS-016` 如何设计容错 Checkpoint，并控制大规模保存对训练吞吐的影响？
- [ ] `DIS-017` 弹性训练如何处理节点加入、退出和数据进度一致性？
- [ ] `DIS-018` 如何对 GPU Kernel 做访存合并、Tiling、并行归约和 Kernel Fusion？
- [ ] `DIS-019` CUDA Kernel 优化中 Occupancy、Register、Shared Memory 和 Memory Coalescing 分别意味着什么？
- [ ] `DIS-020` 如何使用 Profiler 定位 Data Loader、CPU、通信、Kernel 和同步瓶颈？
- [ ] `DIS-021` 大规模训练中如何保证数据顺序、随机性和断点恢复的一致性？
- [ ] `DIS-022` 如何计算一次分布式训练任务的理论吞吐、实际吞吐和 MFU？
- [ ] `DIS-023` 训练集群调度如何处理 Gang Scheduling、抢占、配额和碎片？
- [ ] `DIS-024` 如何设计模型、数据、代码和环境的版本管理与实验追踪？
- [ ] `DIS-025` 训练成本异常升高时，应从算力利用率、通信、数据和容错哪些方面排查？

## 15. 手写代码与算法

- [ ] `COD-001` 使用 PyTorch 手写支持 Mask 的 Scaled Dot-Product Self-Attention。
- [ ] `COD-002` 使用 PyTorch 手写 Multi-Head Attention，并正确处理张量形状。
- [ ] `COD-003` 手写支持 Cross-Attention、Padding Mask 和 Causal Mask 的注意力层。
- [ ] `COD-004` 手写 MQA 或 GQA，并说明 KV 头的广播方式。
- [ ] `COD-005` 手写带 Prefill、增量 Decode 和清理能力的 KV Cache Attention。
- [ ] `COD-006` 手写数值稳定的 Online Softmax。
- [ ] `COD-007` 手写 RoPE 的频率预计算与旋转应用函数。
- [ ] `COD-008` 手写一个 LoRA Linear Layer，并支持合并与取消合并权重。
- [ ] `COD-009` 手写 BPE 的训练与编码过程，并正确处理词边界。
- [ ] `COD-010` 手写 Greedy Search、Top-K 与 Top-P Sampling。
- [ ] `COD-011` 手写带长度惩罚和提前停止的 Beam Search。
- [ ] `COD-012` 手写 Repetition、Frequency 和 Presence Penalty 的 Logits Processor。
- [ ] `COD-013` 手写 Speculative Decoding 的候选验证与接受拒绝过程。
- [ ] `COD-014` 手写批量余弦相似度检索并返回 Top-K 文档。
- [ ] `COD-015` 手写 BM25，并解释 IDF、文档长度归一化和参数作用。
- [ ] `COD-016` 手写 Reciprocal Rank Fusion 合并多路检索结果。
- [ ] `COD-017` 手写 LayerNorm 与 RMSNorm，并验证和框架实现的一致性。
- [ ] `COD-018` 手写 SwiGLU FFN，并计算其参数量。
- [ ] `COD-019` 编写函数估算 Transformer 的参数量、训练 FLOPs 和推理 FLOPs。
- [ ] `COD-020` 编写函数计算不同模型配置下的权重、激活和 KV Cache 显存。
- [ ] `COD-021` 实现 LRU Cache，并分析时间与空间复杂度。
- [ ] `COD-022` 使用堆或 Quickselect 解决 Top-K 问题。
- [ ] `COD-023` 合并 K 个有序链表，并比较不同解法复杂度。
- [ ] `COD-024` 实现二叉树层序遍历。
- [ ] `COD-025` 实现最长公共子序列并优化空间复杂度。
- [ ] `COD-026` 实现岛屿数量问题并比较 DFS、BFS 和并查集。
- [ ] `COD-027` 手写快速排序和归并排序，并讨论稳定性与最坏复杂度。
- [ ] `COD-028` 实现滑动窗口最大值并说明单调队列原理。
- [ ] `COD-029` 实现一个线程安全或异步的限流器。
- [ ] `COD-030` 解析流式模型输出，并正确处理增量 UTF-8、JSON 和取消请求。

## 16. 系统设计与场景题

- [ ] `SYS-001` 设计一个支持高并发、流式输出和多模型路由的大模型推理服务。
- [ ] `SYS-002` 如何在推理服务中同时优化高并发、低延迟、高可用和低成本？
- [ ] `SYS-003` 设计一个同时支持在线请求与离线批处理的统一推理平台。
- [ ] `SYS-004` 设计一个具有优先级、配额、公平性和取消能力的请求调度器。
- [ ] `SYS-005` 设计一个支持多模型、多 LoRA 和灰度版本的模型网关。
- [ ] `SYS-006` 设计一个跨地域部署、故障切换和流量回放的大模型服务。
- [ ] `SYS-007` 设计一个企业级 RAG 系统，覆盖索引、查询、权限、引用和评估。
- [ ] `SYS-008` 设计一个支持亿级文档、增量更新和混合检索的知识库。
- [ ] `SYS-009` 设计一个面向客服场景、能够引用来源并转人工的问答系统。
- [ ] `SYS-010` 设计一个能够处理表格、图片和扫描 PDF 的多模态文档问答系统。
- [ ] `SYS-011` 设计一个可靠 Agent 系统，覆盖规划、工具、状态、重试、沙箱和观测。
- [ ] `SYS-012` 设计一个具有长期记忆的多轮对话 Agent。
- [ ] `SYS-013` 设计一个多 Agent 协作系统，并说明任务分解和冲突处理机制。
- [ ] `SYS-014` 设计一个能够执行数小时任务、支持中断恢复和人工审批的 Agent。
- [ ] `SYS-015` 设计一个安全的代码生成与执行 Agent。
- [ ] `SYS-016` 设计一个企业内部 MCP 工具平台，覆盖注册、权限、审计和版本治理。
- [ ] `SYS-017` 设计一个大模型分布式训练系统，并选择合适的并行策略。
- [ ] `SYS-018` 设计一个训练数据生产平台，覆盖采集、清洗、去重、质量和版本管理。
- [ ] `SYS-019` 设计一个 SFT、偏好优化和评测一体化的平台。
- [ ] `SYS-020` 设计一个 LLM-as-Judge 评测平台，并控制偏差、成本和可复现性。
- [ ] `SYS-021` 设计一个模型安全网关，处理越狱、Prompt Injection、敏感数据和过度拒答。
- [ ] `SYS-022` 设计一个线上 Bad Case 发现、聚类、标注和回归闭环系统。
- [ ] `SYS-023` 设计一个文本到 SQL 系统，并处理 Schema 检索、执行验证和安全限制。
- [ ] `SYS-024` 设计一个教育 AI 系统，为学生生成个性化学习路径并控制错误知识风险。
- [ ] `SYS-025` 在 GPU 数量固定的情况下，如何为业务制定模型质量、延迟、吞吐和成本的容量方案？
